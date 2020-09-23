let steps = document.querySelectorAll(".process-steps");
let dataSteps = document.querySelectorAll(".process-steps-data");
let closes = document.querySelectorAll(".process-steps-data-close");

steps.forEach((step) => {
  step.addEventListener("click", () => {
    let _step = step.getAttribute("data-steps");

    dataSteps.forEach((el) =>
      el.classList.remove("recruit-process-steps-active")
    );

    let dataOfStep = [...dataSteps].find(
      (el) => el.getAttribute("data-steps") === _step
    );

    dataOfStep.classList.add("recruit-process-steps-active");

    let waitToCloseStep = [...closes].find(
      (steps_want_close) =>
        steps_want_close.getAttribute("data-steps") === _step
    );

    waitToCloseStep.addEventListener("click", () => {
      dataOfStep.classList.remove("recruit-process-steps-active");
    });
  });
});
