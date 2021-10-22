document.addEventListener("DOMContentLoaded", () => {
  function animateShow(animatedEl, question) {
    if (question) {
      animatedEl.style.cssText = `height: ${animatedEl.scrollHeight}px;`;
    } else {
      animatedEl.style.cssText = `height: ${animatedEl.scrollHeight}px;`;
    }
  }
  function animateHide(animatedEl, question) {
    if (question) {
      animatedEl.style.cssText = ` height:0px;`;
    } else {
      animatedEl.style.maxHeight = `0`;
    }
  }

  //question block animation

  const questionEl = document.querySelectorAll(".faq__item");
  const questionAnimation = (animatedEl, iconEl, event) => {
    if (animatedEl.clientHeight === 0) {
      iconEl.classList.add("_active");
      animateShow(animatedEl, true);
    } else {
      if (event.target !== animatedEl) {
        iconEl.classList.remove("_active");
        animateHide(animatedEl, true);
      }
    }
  };
  for (let index = 0; index < questionEl.length; index++) {
    const elem = questionEl[index];
    let questionBodyEl = elem.querySelector(".faq__content");
    let questionIconEl = elem.querySelector(".faq__icon");
    elem.addEventListener("click", (event) => {
      questionAnimation(questionBodyEl, questionIconEl, event);
    });
  }
  // questionEl.forEach((elem) => {

  // });
});
