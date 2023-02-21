import { defineStore } from "pinia";
interface TechState {
  data: object;
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
      console.log(state.data);
      return state.data;
    },
  },
  actions: {
    [TechActions.setDataAction](payload: object): void {
      this.data = payload;
      console.log(payload, this.data);
    },
  },
});
