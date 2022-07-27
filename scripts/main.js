// window.jsPDF = window.jspdf.jsPDF;
// window.html2canvas = html2canvas;
const elementsPage = document.querySelectorAll(".page__content > *");
const tools = new Tools();
const page = new Page(tools);

elementsPage.forEach((el) => el.classList.add("paragraph"));

document.querySelector("div").addEventListener("input", (e) => {
  console.log("teste");
});

let input = document.querySelector('input[type="file"]');

// input.addEventListener("change", (e) => {
//   let input = e.target;
//   let reader = new FileReader();
//   console.log(input.files[0]);
//   let file = input && input.files[0] ? input.files[0] : null;

//   reader.onload = function () {
//     console.log(reader.result);
//     base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

//     // imageBase64Stringsep = base64String;

//     // alert(imageBase64Stringsep);
//     console.log(base64String);
//   };
//   reader.readAsDataURL(file);
//   console.log(base64String);
// });
