import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {
  const tabControl = document.querySelectorAll(".services__btn");
  const tabView = document.querySelectorAll(".services__view");
  if (tabControl.length > 0 && tabView.length > 0) {
    let activeTabControl = tabControl[0];
    let activeTabView = tabView[0];
    const tabViewObj = {};
    for (let index = 0; index < tabView.length; index++) {
      const element = tabView[index];
      const dataIndex = element.getAttribute("data-tab");
      tabViewObj[dataIndex] = element;
    }
    for (let index = 0; index < tabControl.length; index++) {
      const element = tabControl[index];
      element.addEventListener("click", function () {
        element.classList.add("_active");
        if (element !== activeTabControl) {
          activeTabControl.classList.remove("_active");
          activeTabControl = element;
          tabViewObj[element.getAttribute("data-tab")].classList.add("_active");
          activeTabView.classList.remove("_active");
          activeTabView = tabViewObj[element.getAttribute("data-tab")];
        }
      });
    }
    new SimpleBar(document.querySelector(".services__col--control"), {
      autoHide: false,
    });
  }
});
