import { TechActions, techStore } from "@/stores/tech";
import { TechItemType } from "~~/stores/types";

export function fetchAllTechItems():void {
  const client = useSupabaseClient();
  const techPinia = techStore();
  const { data: techList } = useAsyncData(async () => {
    const { data } = await client
      .from("tech")
      .select("id,created_at,title, sub_title,description,image_name,slug");

    return data as TechItemType[] | null;
  });

  if (techList) {
    techPinia[TechActions.setDataAction](techList.value);
  }
}
