import { defineStore } from "pinia";
import { TechItemType, TestObject } from "./types";
interface TechState {
  data: TestObject;
}
export enum TechActions {
  setDataAction = "setDataAction",
}

export const techStore = defineStore("tech", {
  state: (): TechState => ({
    data: {},
  }),
  getters: {
    dataGetter: (state): object => {
      return state.data;
    },
  },
  actions: {
    [TechActions.setDataAction](payload: TechItemType[] | null): void {
      if (payload === null) return;
      for (let i in payload) {
        this.data[payload[i].id] = payload[i];
      }
    },
  },
});
