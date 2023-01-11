import { defineStore } from 'pinia'

interface AppState {
    darkMode: boolean,
}
export enum AppActions {
  themeToggleAction = 'themeToggleAction',
}

export const appStore = defineStore('app', {
  state: (): AppState => ({
    darkMode: false
  }),
  getters: {
    darkModeGetter: (state) => {
      return state.darkMode
    }
  },
  actions: {
    [AppActions.themeToggleAction] (payload = false) {
      this.darkMode = payload
    }
  }
})
