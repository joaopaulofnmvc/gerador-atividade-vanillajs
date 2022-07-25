const elementsPage = document.querySelectorAll(".page__content > *");
const tools = new Tools();
const page = new Page(tools);

elementsPage.forEach((el) => el.classList.add("paragraph"));

document.querySelector("div").addEventListener("input", (e) => {
  console.log("teste");
});
