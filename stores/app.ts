import { defineStore } from 'pinia'

interface AppState {
  isMobile: boolean,
  isNavigationOpened: boolean,
  darkMode: boolean,
}
export enum AppActions {
  themeToggleAction = 'themeToggleAction',
  toggleNavigationAction = 'toggleNavigationAction',
  isMobileAction = 'isMobileAction',
}

export const appStore = defineStore('app', {
  state: (): AppState => ({
    isMobile: false,
    isNavigationOpened:false,
    darkMode: false,
  }),
  getters: {
    darkModeGetter: (state):boolean=> {
      return state.darkMode
    },
    isNavigationOpenedGetter: (state):boolean=> {
      return state.isNavigationOpened
    },
    isMobileGetter: (state):boolean => {
      return state.isMobile
    }
  },
  actions: {
    [AppActions.themeToggleAction] ():void {
      this.darkMode = !this.darkMode
    },
    [AppActions.toggleNavigationAction] (): void{
      this.isNavigationOpened = !this.isNavigationOpened
    },
    [AppActions.isMobileAction] (payload: boolean): void{
      this.isMobile = payload
    },
  }
})
