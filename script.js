// Variable Declarations
const main = document.querySelector("main");
const article = document.querySelectorAll("article");
const h1 = document.querySelector("h1");
const h3 = document.querySelectorAll("h3");
const ul = document.querySelectorAll("article ul");
const li = document.querySelectorAll("article li");
const agriTheme = document.querySelector("#agriTheme");
const policeTheme = document.querySelector("#policeTheme");
// Add Police Theme
const addTheme = () => {
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
}

// Remove Police Theme and Retain Original Agri Theme
const removeTheme = () => {
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
}

// Event Listeners
policeTheme.addEventListener("click", addTheme);

agriTheme.addEventListener("click", removeTheme);