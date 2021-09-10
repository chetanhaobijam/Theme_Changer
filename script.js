// VARIABLE DECLARATIONS
const greenTheme = document.querySelector("#greenTheme");
const orangeTheme = document.querySelector("#orangeTheme");
const blueTheme = document.querySelector("#blueTheme");
const html = document.querySelector("html");
const body = document.querySelector("body");
const decrease = document.querySelector("#fontDecrease");
const original = document.querySelector("#fontOriginal");
const increase = document.querySelector("#fontIncrease");
const changeContrast = document.querySelector(".change-contrast");
const contrastLevelLabel = document.querySelector(".change-contrast label");
const contrastRangeInput = document.querySelector("#contrast-range");
const contrastLevel = document.querySelector("#contrast-level");
const darkModeBtn = document.querySelector("#dark-mode-button");


let contrastColors = [
  "rgb(72, 202, 228)", "rgb(144, 224, 239)", "rgb(173, 232, 244)", "rgb(202, 240, 248)", "rgb(255, 255, 255)", "rgb(233, 236, 239)", "rgb(222, 226, 230)", "rgb(206, 212, 218)", "rgb(173, 181, 189)"
];
// ============================================================

// FUNCTIONS
// Function to add Agri Theme
const addGreenTheme = () => {
  body.classList.add("agri")
}

// Function to Remove Agri Theme
const removeGreenTheme = () => {
  body.classList.remove("agri");
}

// Function to Add Police Theme
const addOrangeTheme = () => {
  body.classList.add("police");
}

// Function to Remove Police Theme
const removeOrangeTheme = () => {
  body.classList.remove("police")
}

// Function to Add MSPDCL Theme
const addBlueTheme = () => {
  body.classList.add("mspdcl");
}

// Function to remove MSPDCL Theme
const removeBlueTheme = () => {
  body.classList.remove("mspdcl");
}

// Function to Increase or Decrease Font Size
let defaultFontSize = $('html').css('font-size');
const minSize = parseFloat(defaultFontSize, 12) - 3;
const maxSize = parseFloat(defaultFontSize, 12) + 3;

$(original).click(function () {
    $('html').css('font-size', defaultFontSize);
});

$(increase).click(function () {
    let fontSize = getFontSize();
    let newFontSize = fontSize + 1;
    if (newFontSize <= maxSize) setFontSize(newFontSize);
    return false;
});

$(decrease).click(function () {
    let fontSize = getFontSize();
    let newFontSize = fontSize - 1;
    if (newFontSize >= minSize) setFontSize(newFontSize);
    return false;
});

function getFontSize() {
    let currentSize = $("html").css("font-size");
    let currentSizeNumber = parseFloat(currentSize, 12);
    if (currentSizeNumber > 24) {
        currentSizeNumber = 24;
    }
    if (currentSizeNumber < 10) {
        currentSizeNumber = 10;
    }
    return currentSizeNumber;
}

function setFontSize(size) {
    $("html").css("font-size", size);
    $(".actualSize").html(size);
}

// Function to Change Contrast Based on Range Input
const changeContrastOnRange = () => {
  let rangeValue = contrastRangeInput.value;
  switch(rangeValue) {
    case "-4":
      body.style.background = contrastColors[0];
      break;
    case "-3":
      body.style.background = contrastColors[1];
      break;
    case "-2":
      body.style.background = contrastColors[2];
      break;
    case "-1":
      body.style.background = contrastColors[3];
      break;
    case "0":
      body.style.background = contrastColors[4];
      break;
    case "1":
      body.style.background = contrastColors[5];
      break;
    case "2":
      body.style.background = contrastColors[6];
      break;
    case "3":
      body.style.background = contrastColors[7];
      break;
    case "4":
      body.style.background = contrastColors[8];
      break;
  }
}
// =======================================================

// EVENT LISTENERS
// When clicked at Green Theme
greenTheme.addEventListener("click", () => {
  removeOrangeTheme();
  removeBlueTheme();
  addGreenTheme();
});

// When clicked at Orange Theme
orangeTheme.addEventListener("click", () => {
  removeGreenTheme();
  removeBlueTheme();
  addOrangeTheme();
});

// When clicked at Blue Theme
blueTheme.addEventListener("click", () => {
  removeGreenTheme();
  removeOrangeTheme();
  addBlueTheme();
})

// Change the Contrast According to the Range
contrastRangeInput.addEventListener("input", () => {
  changeContrastOnRange();
  contrastLevel.textContent = contrastRangeInput.value;
})

//Toggle the Display of Contrast Range
changeContrast.addEventListener("mouseover", () => {
  contrastRangeInput.classList.add("show");
})

changeContrast.addEventListener("mouseleave", () => {
  contrastRangeInput.classList.remove("show");
})


// Toggle the Dark Mode On or Off
darkModeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  document.querySelectorAll(".inverted").forEach(result => {
    result.classList.toggle("invert");
  })
})
// =======================================================


// START UP FUNCTION
addGreenTheme();
body.style.background = contrastColors[4];