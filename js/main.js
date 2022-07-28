$(document).ready(function () {
  $(".plate-submit").click(moveStep);
});

function moveStep() {
  let totalSteps = 5;
  console.log($(this).attr("data-testid"));
  switch ($(this).attr("data-testid")) {
    case "step_1":
      setStepOneData(2);
      break;
    case "step_2":
      showandHideTabs(3);
      break;
    case "step_3":
      showandHideTabs(4);
      break;
    case "step_4":
      showandHideTabs(5,false);
      break;
    case "step_5":
      console.log("here");
      showandHideTabs(6);
      break;
  }
  setProgress(totalSteps);
}

/**
 * set progress bar
 * @param {*totalSteps} totalSteps
 */
function setProgress(totalSteps) {
  $(".progress").attr("value", $(".progress").val() + 100 / totalSteps);
}

function setStepOneData(currentStep) {
  stepsData = { coverage: $(this).attr("data-value") };
  showandHideTabs(currentStep);
  $("#contiue-button-section").show();
}
/**
 *
 * @param {*} currentStep
 */
function showandHideTabs(currentStep, showContinueButton = true) {
  $("#step_" + currentStep).show();
  $("#step_" + (currentStep - 1)).hide();
  if (showContinueButton) {
    $("#contiue-button-section").hide();
  }
  $("#continue").attr("data-testid", "step_" + currentStep);
}

defer(function () {
  $("#plateDebugButton").bind("click", function () {
    $("#plateDebugContent").toggle(0);
  });
  $(".plateDebugLog").each(function () {
    $(this).bind("click", function () {
      $(this)
        .find("pre")
        .each(function () {
          $(this).toggle(0);
        });
    });
  });
});