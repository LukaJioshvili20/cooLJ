import { defineStore } from "pinia";

interface AppState {
  isMobile: boolean;
  isNavigationOpened: boolean;
  darkMode: boolean;
  editTechItemId: object | null;
  accordions: { [key: string]: boolean };
}
export enum AppActions {
  themeToggleAction = "themeToggleAction",
  toggleNavigationAction = "toggleNavigationAction",
  isMobileAction = "isMobileAction",
  toggleAccordionAction = "toggleAccordionAction",
  editTechItemIdAction = "editTechItemIdAction",
}

export const appStore = defineStore("app", {
  state: (): AppState => ({
    isMobile: false,
    isNavigationOpened: false,
    darkMode: false,
    editTechItemId: null,
    accordions: {
      biography: true,
      technology: true,
    },
  }),
  getters: {
    darkModeGetter: (state): boolean => {
      return state.darkMode;
    },
    isNavigationOpenedGetter: (state): boolean => {
      return state.isNavigationOpened;
    },
    isMobileGetter: (state): boolean => {
      return state.isMobile;
    },
    accordionsGetter: (state): { [key: string]: boolean } => {
      return state.accordions;
    },
    editTechItemIdGetter: (state): object | null => {
      return state.editTechItemId;
    },
  },
  actions: {
    [AppActions.themeToggleAction](payload?: boolean): void {
      if (typeof payload === "boolean") {
        this.darkMode = payload;
      } else {
        this.darkMode = !this.darkMode;
      }

      if (this.darkMode) {
        localStorage.setItem("darkTheme", "true");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("darkTheme", "false");
        document.documentElement.classList.remove("dark");
      }
    },
    [AppActions.toggleNavigationAction](payload?: boolean): void {
      if (typeof payload === "boolean") {
        this.isNavigationOpened = payload;
        return;
      }
      this.isNavigationOpened = !this.isNavigationOpened;
    },
    [AppActions.isMobileAction](payload: boolean): void {
      this.isMobile = payload;
    },
    [AppActions.toggleAccordionAction](payload: string): void {
      this.accordions[payload] = !this.accordions[payload];
    },
    [AppActions.editTechItemIdAction](payload: object): void {
      this.editTechItemId = payload;
    },
  },
});
