// Variable Declarations
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");
const article = document.querySelectorAll("article");
const h1 = document.querySelector("h1");
const h3 = document.querySelectorAll("h3");
const ul = document.querySelectorAll("article ul");
const li = document.querySelectorAll("article li");
const mainButton = document.querySelector("main button");
const articleButton = document.querySelectorAll("article button");
const footer = document.querySelector("footer");
const agriTheme = document.querySelector("#agriTheme");
const policeTheme = document.querySelector("#policeTheme");
const mspdclTheme = document.querySelector("#mspdclTheme");
const html = document.querySelector("html");
const decrease = document.querySelector("#fontDecrease");
const original = document.querySelector("#fontOriginal");
const increase = document.querySelector("#fontIncrease");

// Function to add Agri Theme
const addAgriTheme = () => {
  navbar.classList.add("agri-navbar");
  main.classList.add("agri-main");
  article.forEach(item => {
    item.classList.add("agri-article");
  })
  h1.classList.add("agri-h1");
  h3.forEach(item => {
    item.classList.add("agri-h3");
  })
  ul.forEach(item => {
    item.classList.add("agri-ul");
  })
  li.forEach(item => {
    item.classList.add("agri-li");
  })
  mainButton.classList.add("agri-button");
  articleButton.forEach(item => {
    item.classList.add("agri-button");
  })
  footer.classList.add("agri-footer");
}

// Function to Remove Agri Theme
const removeAgriTheme = () => {
  navbar.classList.remove("agri-navbar");
  main.classList.remove("agri-main");
  article.forEach(item => {
    item.classList.remove("agri-article");
  })
  h1.classList.remove("agri-h1");
  h3.forEach(item => {
    item.classList.remove("agri-h3");
  })
  ul.forEach(item => {
    item.classList.remove("agri-ul");
  })
  li.forEach(item => {
    item.classList.remove("agri-li");
  })
  mainButton.classList.remove("agri-button");
  articleButton.forEach(item => {
    item.classList.remove("agri-button");
  })
  footer.classList.remove("agri-footer");
}

// Function to Add Police Theme
const addPoliceTheme = () => {
  navbar.classList.add("police-navbar");
  main.classList.add("police-main");
  article.forEach(item => {
    item.classList.add("police-article");
  })
  h1.classList.add("police-h1");
  h3.forEach(item => {
    item.classList.add("police-h3");
  })
  ul.forEach(item => {
    item.classList.add("police-ul");
  })
  li.forEach(item => {
    item.classList.add("police-li");
  })
  mainButton.classList.add("police-button");
  articleButton.forEach(item => {
    item.classList.add("police-button");
  })
  footer.classList.add("police-footer");
}

// Function to Remove Police Theme
const removePoliceTheme = () => {
  navbar.classList.remove("police-navbar");
  main.classList.remove("police-main");
  article.forEach(item => {
    item.classList.remove("police-article");
  })
  h1.classList.remove("police-h1");
  h3.forEach(item => {
    item.classList.remove("police-h3");
  })
  ul.forEach(item => {
    item.classList.remove("police-ul");
  })
  li.forEach(item => {
    item.classList.remove("police-li");
  })
  mainButton.classList.remove("police-button");
  articleButton.forEach(item => {
    item.classList.remove("police-button");
  })
  footer.classList.remove("police-footer");
}

// Function to add Mspdcl Theme
const addMspdclTheme = () => {
  navbar.classList.add("mspdcl-navbar");
  main.classList.add("mspdcl-main");
  article.forEach(item => {
    item.classList.add("mspdcl-article");
  })
  h1.classList.add("mspdcl-h1");
  h3.forEach(item => {
    item.classList.add("mspdcl-h3");
  })
  ul.forEach(item => {
    item.classList.add("mspdcl-ul");
  })
  li.forEach(item => {
    item.classList.add("mspdcl-li");
  })
  mainButton.classList.add("mspdcl-button");
  articleButton.forEach(item => {
    item.classList.add("mspdcl-button");
  })
  footer.classList.add("mspdcl-footer");
}

// Function to remove MSPDCL Theme
const removeMspdclTheme = () => {
  navbar.classList.remove("mspdcl-navbar");
  main.classList.remove("mspdcl-main");
  article.forEach(item => {
    item.classList.remove("mspdcl-article");
  })
  h1.classList.remove("mspdcl-h1");
  h3.forEach(item => {
    item.classList.remove("mspdcl-h3");
  })
  ul.forEach(item => {
    item.classList.remove("mspdcl-ul");
  })
  li.forEach(item => {
    item.classList.remove("mspdcl-li");
  })
  mainButton.classList.remove("mspdcl-button");
  articleButton.forEach(item => {
    item.classList.remove("mspdcl-button");
  })
  footer.classList.remove("mspdcl-footer");
}

// Function to Increase or Decrease Font Size
const changeFontSize = (element, factor) => {
  let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  let currentSize = parseFloat(style);
  element.style.fontSize = (currentSize + factor) + 'px';
}

// Increase the font-size when clicked
increase.addEventListener("click", () => {
  changeFontSize(html, 1);
})

//Set the default font-size when clicked 
original.addEventListener("click", () => {
  html.style.setProperty("font-size", "15px");
})

// Decrease the font-size when clicked
decrease.addEventListener("click", () => {
  changeFontSize(html, -1);
})

// Event Listeners
// When clicked at Police Theme
agriTheme.addEventListener("click", () => {
  removePoliceTheme();
  removeMspdclTheme();
  addAgriTheme();
});

// When clicked at Agri Theme
policeTheme.addEventListener("click", () => {
  removeAgriTheme();
  removeMspdclTheme();
  addPoliceTheme();
});

mspdclTheme.addEventListener("click", () => {
  removeAgriTheme();
  removePoliceTheme();
  addMspdclTheme();
})

// Start Up Function
addAgriTheme();