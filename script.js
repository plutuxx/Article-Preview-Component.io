const shareButton = document.getElementById("share-btn");
const tooltip = document.getElementById("tooltip");

//Vriable for situation of tooltip
let situation = false;

//Variable for page size status
let mobilePage = false;

//Function to know the size of page and execute tooltip changs
function pageSizeCheck() {
  if (window.innerWidth <= 767) {
    mobilePage = true;
    tooltip.style.top = "0";
    tooltip.style.right = "0";
  } else if (window.innerWidth > 767) {
    mobilePage = false;
    tooltip.style.top = "-172%";
    tooltip.style.right = "";
  }
}
// Event listener for the resize event
window.addEventListener("resize", pageSizeCheck);
// To execute after any resizing
pageSizeCheck();

// Function to show the tooltip element (for desktop size)
function desktopShowElement() {
  tooltip.style.top = "-172%";
  tooltip.style.opacity = 1;
  tooltip.style.pointerEvents = "auto";
  situation = true;
  shareButton.style.fill = "var(--Light-Grayish-Blue)";
  shareButton.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
}

// Function to show the tooltip element (for mobile size)
function mobileShowElement() {
  tooltip.style.opacity = 1;
  tooltip.style.pointerEvents = "auto";
  situation = true;
  shareButton.style.fill = "var(--Light-Grayish-Blue)";
  shareButton.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
}

// Function to hide the tooltip element (for both size)
function hideElement() {
  tooltip.style.top = "";
  tooltip.style.opacity = "";
  tooltip.style.pointerEvents = "";
  situation = false;
  shareButton.style.fill = "";
  shareButton.style.backgroundColor = "";
}

// Event listener to show the element when the shareButton is clicked
shareButton.addEventListener("click", () => {
  if (situation == false && mobilePage == false) {
    desktopShowElement();
  } else if (situation == true && mobilePage == false) {
    hideElement();
  } else if (situation == false && mobilePage == true) {
    mobileShowElement();
  } else if (situation == true && mobilePage == true) {
    hideElement();
  }
});

// Event listener to hide the element when a click occurs outside of tooltip element
document.addEventListener("click", function (event) {
  if (
    event.target !== tooltip &&
    !tooltip.contains(event.target) &&
    event.target !== shareButton
  ) {
    hideElement();
  }
});
