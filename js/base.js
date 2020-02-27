function test() {
    document.querySelector(".nav").classList.toggle("nav-extended");
    document
      .querySelector(".wrapper")
      .classList.toggle("wrapper__nav-extended");
    document.querySelector(".fa-bars").classList.toggle("fa-times");
  }