let windowThis = this;
class Tools {
  constructor() {
    this._windowSelection = window.getSelection();
    this.doc = new jsPDF();
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
      let printContent = document.getElementById("finalContent");

      this.addContentToPrinterContainer(printContent);
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
  addContentToPrinterContainer(container) {
    let pages = document.querySelectorAll(".page .page__content");

    console.log(pages);

    let content = ``;
    pages.forEach((page) => {
      console.log(page);
      let arrChilds = Array.from(page.children);

      arrChilds.forEach((child) => {
        content += child.outerHTML;
      });
    });

    console.log(content);

    container.innerHTML = content;
  }
  saveToPDF(title) {
    let documentConvert = document.getElementById("finalContent");
    this.doc.fromHTML(
      documentConvert, // page element which you want to print as PDF
      15,
      15,
      {
        width: 170, //set width
      },
      () => {
        this.doc.save("HTML2PDF.pdf"); // save file name as HTML2PDF.pdf
      }
    );
    // axios.get();
  }
}

const jsonQuestoes = [
  {
    type: "header",
    version: "5.0.4",
    comment: "Export to JSON plugin for PHPMyAdmin",
  },
  { type: "database", name: "evoluir" },
  {
    type: "table",
    name: "questao",
    database: "evoluir",
    data: [
      {
        id: "1",
        descricao: `<p><img src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=1800&t=st=1658771024~exp=1658771624~hmac=8d8af2bb263455348e23cbf0fef72b91127da91bedd2c8acedc947e8077615a8" alt="imagem"/></p>`,
        rgabarito: "D",
        comentario:
          "Afortunada: Que possui ou desfruta de boa sorte; que está repleto de felicidade e/ou sorte; que obteve êxito; bem-aventurado.",
        id_disciplina: "1",
        id_habilidade: "1",
        id_descritor: "1",
        created_at: "2022-04-06 11:32:08",
        updated_at: "2022-06-10 09:26:00",
        id_user: null,
        id_ano: "5",
        tipo: "objetiva",
        re: null,
        rf: null,
        conteudo_anexo: "",
        revisada: "0",
      },
      {
        id: "2",
        descricao: `<p>Insira seu Texto....</p>`,
        rgabarito: "D",
        comentario:
          "Afortunada: Que possui ou desfruta de boa sorte; que está repleto de felicidade e/ou sorte; que obteve êxito; bem-aventurado.",
        id_disciplina: "1",
        id_habilidade: "1",
        id_descritor: "1",
        created_at: "2022-04-06 11:32:08",
        updated_at: "2022-06-10 09:26:00",
        id_user: null,
        id_ano: "5",
        tipo: "objetiva",
        re: null,
        rf: null,
        conteudo_anexo: "",
        revisada: "0",
      },
    ],
  },
];
