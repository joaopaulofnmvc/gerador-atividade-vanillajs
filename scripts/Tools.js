class Tools {
  constructor() {
    this._windowSelection = window.getSelection();
    // this.doc = new jsPDF({ unit: "px" });
    this.printerBtn = document.getElementById("printerBtn");
    this.pdfBtn = document.getElementById("pdfBtn");

    this.init();
  }
  //getters and setters
  get(property) {
    return this[property];
  }
  set(property, value) {
    if (!property.includes("_")) {
      this[property] = value;
    } else {
      this[property] = this[property];
    }
  }

  init() {
    // this.onClickPrinterBtn();
    this.onClickPdfBtn();
  }

  onClickPrinterBtn() {
    this.printerBtn.addEventListener("click", (e) => {
      let printContent = document.getElementById("printContent");

      let windowPrinter = window.open("about:blank");
      this.addContentToPrinterContainer(printContent);
      windowPrinter.document.write(printContent);
      windowPrinter.window.print();
      windowPrinter.window.close();
    });
  }

  onClickPdfBtn() {
    this.pdfBtn.addEventListener("click", (e) => {
      this.saveToPDF("Atividade 2");
    });
  }
  //Comands
  boldCommand() {
    const strongElement = document.createElement("strong");
    const userSelection = this._windowSelection;
    const selectedTextRange = userSelection.getRangeAt(0);

    selectedTextRange.surroundContents(strongElement);
  }
  // Printer Container
  addContentToPrinterContainer() {
    const formatedContent = document.getElementById("formatedContent");
    let pages = document.querySelectorAll(".page .page__content");
    // let imagesArr = document.querySelectorAll(".page .page__content img");

    // this.convertAllImagesToBase64(imagesArr);

    let content = ``;

    pages.forEach((page) => {
      console.log(page);
      let arrChilds = Array.from(page.children);

      arrChilds.forEach((child) => {
        console.log(child.tagName);

        content += child.outerHTML;
      });
    });

    formatedContent.innerHTML = `${content}`;
  }
  convertAllImagesToBase64(imagesArr) {
    imagesArr.forEach((img) => {
      // let parent = img.parentNode;
      // console.log("parent: ", img.parentNode);

      // let imgBase64 = this.getBase64Image(img);

      img.src = imgBase64;

      console.log(imgBase64);
    });
  }
  convertImageUploadIntoBase64() {
    let input = document.querySelector('input[type="file"]');
    let base64String = "";

    let reader = new FileReader();
    console.log(input.files[0]);
    let file = input && input.files[0] ? input.files[0] : null;

    reader.onload = function () {
      console.log(reader.result);
      base64String = reader.result;

      // alert(imageBase64Stringsep);
      console.log(base64String);
    };
    reader.readAsDataURL(file);
    console.log(base64String);
    return base64String;
  }

  async getBase64ImageFromUrl(imageUrl) {
    let res = await fetch(imageUrl);
    let blob = await res.blob();
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          resolve(reader.result);
        },
        false
      );
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }

  // getBase64Image(img) {
  //   let canvas = document.createElement("canvas");
  //   canvas.width = img.width;
  //   canvas.height = img.height;
  //   let ctx = canvas.getContext("2d");
  //   ctx.drawImage(img, 0, 0);
  //   let dataURL = canvas.toDataURL("image/png");
  //   return (dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
  // }

  saveToPDF(title) {
    this.addContentToPrinterContainer();
    let documentConvert = document.getElementById("finalContent");
    // let image = this.convertImageIntoBase64();
    // let doc = new jsPDF();
    // doc.setFontSize(22);
    // doc.text(20, 20, "This is a title");

    // doc.setFontSize(16);
    // doc.text(20, 30, "This is some normal sized text underneath.");

    // doc.addImage(image);
    // doc.save("Test.pdf");
    // this.doc.text("Testando 123 ");
    html2pdf(documentConvert.innerHTML);

    // this.doc.save();
    // axios.get();
  }
}
