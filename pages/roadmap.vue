<template>
  <section>
    <h1>Canvas</h1>
    <canvas ref="exeperiance"></canvas>
  </section>
</template>

<script setup lang="ts">
  import { useWindowSize } from "@vueuse/core";
  import {
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    SphereGeometry,
    WebGLRenderer,
  } from "three";
  // setup
  let renderer: WebGLRenderer;
  const { width, height } = useWindowSize();
  const aspectRatio = computed(() => width.value / height.value);

  const scene = new Scene();
  const exeperiance = ref<HTMLCanvasElement | null>(null);
  // added camera
  const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
  camera.position.set(0, 0, 5);

  scene.add(camera);
  // added 3d object
  const sphere = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshBasicMaterial({ color: 0xff0000 })
  );
  scene.add(sphere);

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
      });
      updateRenderer();
    }
  }
  function loop() {
    sphere.position.x += 0.01;
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
    console.log("on Mounted");
  });
</script>
