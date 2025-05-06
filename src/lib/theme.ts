import { browser } from "$app/environment";
import { writable } from "svelte/store";

// Browser default theme
const init = browser
  ? (
      // checking if storage is exist
      localStorage.getItem("dark") !== null
        ? localStorage.getItem("dark") === "true"
        // use browser prefered theme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  : false;

export const isDark = writable(init);

if (browser) {
  isDark.subscribe(value => {
    document.documentElement.classList.toggle("dark", value);
    localStorage.setItem("dark", String(value));
  });
}

export function switchLight() {
  isDark.update(v => !v);
}
