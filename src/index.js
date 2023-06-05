if (
  localStorage.theme === "light" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: light)").matches)
) {
  document.documentElement.classList.remove("dark");
}

window.onload = () => {

  const checkbox = document.querySelector('input[type="checkbox"]');

  if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", ({target}) => {
    if (target.checked) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });
};