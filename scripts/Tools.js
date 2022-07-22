class Tools {
  constructor() {
    this._windowSelection = window.getSelection();
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

  init() {}

  onClickPrinterBtn() {
    this.printerBtn.addEventListener("click", (e) => {
      let printContent = document.getElementById("printContent");

      let windowPrinter = window.open("about:blank");
      addContentToPrinterContainer(printContent);
      windowPrinter.document.write(printContent);
      windowPrinter.window.print();
      windowPrinter.window.close();
    });
  }

  onClickPdfBtn() {
    this.pdfBtn.addEventListener("click", (e) => {
      let printContent = document.getElementById("finalContent");

      addContentToPrinterContainer(printContent);
      saveToPDF("Atividade 2");
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
  addContentToPrinterContainer(container) {
    let pages = document.querySelectorAll(".page");

    let content = `
          <p>teste</p>  
          <img
          src="https://i.pinimg.com/236x/ce/19/09/ce19092ccee37a55816bbc8f35242f69.jpg"
         
        />
        `;
    pages.forEach((page) => {
      console.log(page);
    });

    container.innerHTML = content;
  }
  saveToPDF(title) {
    doc.fromHTML(
      `<html><head><title>${title}</title></head><body>` +
        document.getElementById("finalContent").innerHTML +
        `</body></html>`
    );
    doc.save("div.pdf");
  }
}
