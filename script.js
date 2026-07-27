let sharePanelContainer = document.querySelector(".share-panel-container");
let isShowing = false;
let personalInfoContainer = document.querySelector(".personal-info-container");
let sharePanelTooltipContainer = document.querySelector(
  ".share-panel-tooltip-container",
);
let shareButton = document.querySelector(".share-button");
sharePanelTooltipContainer.style.display = "none";
let shareIcon = shareButton.querySelector("img");

function shareArticle() {
  const isDesktop = window.innerWidth >= 1024;

  if (isDesktop) {
    if (isShowing) {
      sharePanelTooltipContainer.style.display = "none";
      shareButton.style.backgroundColor = "";
      shareIcon.style.filter = "";
      isShowing = false;
    } else {
      sharePanelTooltipContainer.style.display = "block";
      personalInfoContainer.style.display = "flex";
      shareButton.style.backgroundColor = "hsla(217, 19%, 35%, 0.8)";
      shareIcon.style.filter = "brightness(0) invert(1)";
      isShowing = true;
    }
  } else {
    if (isShowing) {
      sharePanelContainer.style.display = "none";
      personalInfoContainer.style.display = "flex";
      isShowing = false;
    } else {
      sharePanelContainer.style.display = "block";
      personalInfoContainer.style.display = "none";
      isShowing = true;
    }
  }
}

function leaveShare() {
  sharePanelTooltipContainer.style.display = "none";
  shareButton.style.backgroundColor = "";
  shareIcon.style.filter = "";
  isShowing = false;
}
