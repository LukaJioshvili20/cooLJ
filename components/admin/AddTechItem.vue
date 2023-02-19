<template>
  <div
    class="block p-6 rounded-lg shadow-lg bg-zinc-900 border-zinc-400 border-2 max-w-sm"
  >
    <form class="text-white" @submit.prevent="uploadTech">
      <div class="from-group mb-4">
        <h2 class="font-semibold">Add Tech Item</h2>
      </div>
      <div class="form-group mb-2">
        <label for="inputTitle" class="form-label inline-block mb-2"
          >Title</label
        >
        <input
          v-model="title"
          type="text"
          name="title"
          class="form-control text-zinc-900 block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-red-400 focus:outline-none"
          id="inputTitle"
          placeholder="title"
        />
      </div>
      <div class="form-group mb-2">
        <label for="inputSubTitle" class="form-label inline-block mb-2"
          >Sub Title</label
        >
        <input
          v-model="sub_title"
          type="text"
          name="sub_title"
          class="form-control text-zinc-900 block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-red-400 focus:outline-none"
          id="inputSubTitle"
          placeholder="sub_title"
        />
      </div>

      <div class="form-group mb-2">
        <label for="inputDescription" class="form-label inline-block mb-2"
          >Description</label
        >
        <textarea
          v-model="description"
          name="description"
          class="form-control text-zinc-900 block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-red-400 focus:outline-none"
          id="inputDescription"
          placeholder="description"
        />
      </div>
      <div class="form-group mb-2">
        <label for="inputSlug" class="form-label inline-block mb-2">Slug</label>
        <input
          v-model="slug"
          name="slug"
          type="text"
          class="form-control text-zinc-900 block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-red-400 focus:outline-none"
          id="inputSlug"
          placeholder="slug"
        />
      </div>

      <div class="form-group mb-2">
        <label for="inputImageName" class="form-label inline-block mb-2"
          >Image
        </label>
        <input
          name="imageFile"
          type="file"
          accept="image/*"
          @change="onFileSelected"
          class="form-control text-zinc-900 block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-red-400 focus:outline-none"
          id="inputImageFile"
          placeholder="inputImageFile"
        />
      </div>
      <button
        type="submit"
        class="px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        ADD
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
  interface Tech {
    id?: number;
    title: string;
    sub_title: string;
    description: string;
    slug: string;
    image_name: string;
  }

  const client = useSupabaseClient();
  const title = ref("");
  const sub_title = ref("");
  const description = ref("");
  const slug = ref("");
  const imageFile = ref();

  interface UpsertResponse {
    data: Tech | null;
    error: any;
  }
  function onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    let fileList: FileList | null = fileInput.files;
    if (!fileList) return;

    if (typeof fileList[0] === "object") {
      imageFile.value = fileList[0];
      console.info("SUCESS -- File uploaded: ", imageFile.value);
    }
  }

  async function upsertTech(
    client: any,
    title: any,
    sub_title: any,
    description: any,
    slug: any,
    imageFile: any
  ): Promise<UpsertResponse> {
    try {
      const { data: insertData, error: insertError } = await client
        .from("tech")
        .upsert({
          title: title,
          sub_title: sub_title,
          description: description,
          slug: slug,
          image_name: imageFile,
        })
        .select()
        .single();

      if (insertError) {
        console.error("ERROR -- Could not insert data:", insertError);
        throw insertError;
      } else {
        console.info("SUCCESS -- Data inserted:", insertData);
      }

      return insertData;
    } catch (error) {
      throw error;
    }
  }
  async function uploadTech() {
    if (title.value && imageFile.value) {
      const upsertData = await upsertTech(
        client,
        title.value,
        sub_title.value,
        description.value,
        slug.value,
        imageFile.value.name
      );

      if (imageFile.value && upsertData.data?.id) {
        const { data, error } = await client.storage
          .from("tech")
          .upload(
            `${upsertData.data?.id}/${imageFile.value.name}`,
            imageFile.value
          );
        if (error) {
          // TODO: add deleteing inserted row if image is not uploaded
          console.error("ERROR -- Could not upload file:", error);
          throw error;
        } else {
          console.info("SUCCESS -- File uploaded:", data);
        }
      }
    }
  }
</script>
