class Page {
  constructor(tools) {
    this.pageContent = document.querySelector(".page__content");
    this.tools = tools;
    this.containerPages = document.getElementById("containerPages");
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

  // Event listeners
  init() {
    // this.onClickContainerPage();
    this.onKeyPressPageContent();
  }

  //   onClickContainerPage() {
  //     this.containerPages.addEventListener("click", (e) => {
  //       this.tools.boldCommand();
  //     });
  //   }
  onKeyPressPageContent() {
    this.pageContent.addEventListener("keypress", (e) => {
      // let selection = this.getWindowSelection(); //pega o elemento selecionado pelo mouse
      // let range = selection.getRangeAt(0);

      // if (e.keyCode == 9) {
      //   // tab key
      //   e.preventDefault();

      //   var editor = e.target;
      //   var doc = editor.ownerDocument.defaultView;

      //   var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
      //   range.insertNode(tabNode);

      //   range.setStartAfter(tabNode);
      //   range.setEndAfter(tabNode);
      //   selection.removeAllRanges();
      //   selection.addRange(range);
      // }

      this.verifyFinalContentPage();
      this.verifyPageBackspacePressed(e.keyCode);
    });
  }
  verifyFinalContentPage() {
    let activeElement = document.activeElement; //qual elemento que o cursor esta

    let containerPage = activeElement.parentNode;
    let lastChild = activeElement.lastChild.previousSibling; //ultimo filho adicionado em page
    let bottomElementFinalChild = lastChild.offsetTop;

    let paddingValuePageContainer = Number(
      getComputedStyle(containerPage)
        .getPropertyValue("padding-top")
        .replace("px", "")
    );

    let heightPageContainerWithoutPadding =
      containerPage.clientHeight - paddingValuePageContainer * 2;

    console.log(bottomElementFinalChild);
    console.log("Height of pageContainer:" + heightPageContainerWithoutPadding);
    // if (bottomElementFinalChild > heightPageContainerWithoutPadding) {
    //   if (!this.hasElementNextPage(containerPage)) {
    //     this.createNewPage();
    //   } else {
    //     let currentPageNum = Number(activeElement.getAttribute("page"));
    //     console.log(currentPageNum);
    //     let nextPage = this.getPageByNum(currentPageNum + 1);
    //     console.log(nextPage);
    //     // setElToNextPage(nextPage, lastChild);
    //     // setFocusToPage(nextPage);
    //   }
    // } else {
    // }
  }
  verifyPageBackspacePressed(keyCode) {
    if (keyCode == 8) {
      let childsNum = activeElement.childNodes.length;

      if (childsNum == 0) {
        this.removePage(containerPage);
      }
    }
  }
  getWindowSelection() {
    if (window.getSelection) return window.getSelection();
  }

  //Functions
  createNewPage() {
    let pageContainer = document.createElement("section");
    pageContainer.classList.add("page");

    let newPage = document.createElement("div");

    newPage.classList.add("page__content");
    newPage.setAttribute("contentEditable", "true");

    let lastPage = this.getLastPageAddInDOM();

    let newPageCount = Number(lastPage.getAttribute("page")) + 1;

    newPage.setAttribute("page", newPageCount);
    pageContainer.appendChild(newPage);
    this.containerPages.appendChild(pageContainer);

    this.setFocusToPage(newPage);
  }

  getLastPageAddInDOM() {
    return this.containerPages.querySelector(".page:nth-last-of-type(1)");
  }
  getPageByNum(num) {
    return this.containerPages.querySelector(`.page[page="${num}"]`);
  }
  removePage(page) {
    page.remove();
  }
  hasElementNextPage(page) {
    if (page.nextElementSibling) {
      console.log("Tem proximo elemento");
      return true;
    }
    console.log("nao tem proximo elemento");

    return false;
  }
  setFocusToPage(page) {
    console.log(page);
    page.focus();
  }
}
