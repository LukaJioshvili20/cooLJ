<template>
  <div>
    <button
      class="px-4 py-2 rounded-md bg-red-400 text-white font-medium transition-colors hover:bg-red-600"
      @click="downloadFile(props.fileName)"
    >
      {{ props.title }}
      <Icon name="uil:file-download-alt" class="text-white text-lg" />
    </button>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    fileName: {
      type: String,
      require: true,
    },
    filePath: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
  });
  const client = useSupabaseClient();
  async function downloadFile(file_name: string | undefined) {
    if (typeof file_name !== "string") return;

    const { data, error } = await client.storage
      .from("personal")
      .createSignedUrl(props.filePath + "/" + file_name, 90);
    if (error) {
      console.error("COULD NOT RE-DIRECT TO FILE");
      return;
    }

    window.open(data.signedUrl, "_blank");
  }
</script>
