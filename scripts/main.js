const elementsPage = document.querySelectorAll(".page__content > *");

elementsPage.forEach((el) => el.classList.add("paragraph"));

document.querySelector("div").addEventListener("input", (e) => {
  console.log("teste");
});
const tools = new Tools();
const page = new Page(tools);
