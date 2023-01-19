<template>
  <canvas ref="exeperiance"></canvas>
</template>

<script setup lang="ts">
  import { useWindowSize } from "@vueuse/core";
  import { AmbientLight, PerspectiveCamera, Scene, WebGLRenderer } from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  const props = defineProps({
    modelPath: {
      type: String,
      default: null,
    },
  });

  // setup
  let renderer: WebGLRenderer;
  let controls: OrbitControls;
  const { width, height } = useWindowSize();
  const aspectRatio = computed(() => width.value / height.value);

  // const bgColor = new Color("#E1F0C2");
  const scene = new Scene();
  // scene.fog = new Fog(bgColor, 0.1, 75);
  const exeperiance = ref<HTMLCanvasElement | null>(null);
  // added camera
  const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
  camera.position.set(0, 0, 5);
  scene.add(camera);

  const ambientLight = new AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const { load } = useGLTFModel();
  const { scene: model }: any = await load(props.modelPath);

  scene.add(model);
  function updateRenderer() {
    renderer.setSize(width.value, height.value);
    renderer.render(scene, camera);
  }
  function updateCamera() {
    camera.aspect = aspectRatio.value;
    camera.updateProjectionMatrix();
  }
  function setRenderer() {
    if (exeperiance.value) {
      renderer = new WebGLRenderer({
        canvas: exeperiance.value,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      updateRenderer();
    }
  }
  function loop() {
    model.rotation.y += 0.01;

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  watch(aspectRatio, () => {
    updateCamera();
    updateRenderer();
  });
  onMounted(() => {
    setRenderer();
    loop();
  });
</script>
