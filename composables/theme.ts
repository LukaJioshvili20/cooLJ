export function initializeThemePreferance(): boolean {
  const themePreferance = localStorage.getItem("darkTheme");
  console.log(Boolean(themePreferance));

  if (themePreferance) return Boolean(themePreferance);

  if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
    localStorage.setItem("darkTheme", "true");
    return true;
  }

  localStorage.setItem("darkTheme", "false");
  return false;
}
