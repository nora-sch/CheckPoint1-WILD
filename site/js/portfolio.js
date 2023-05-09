// CHANGE AVATAR
const devAvatar = document.querySelector("#dev-avatar");
devAvatar.addEventListener("click", (e) => {
  const src = devAvatar.getAttribute("src");
  if (src !== "./image/avatar.svg") devAvatar.src = "./image/avatar.svg";
  else devAvatar.src = "./image/avatar-bis.png";
});

// CHANGE NAME AND COLOR
const changeNameBtn = document.querySelector("#change-name-btn");
const nameDiv = document.querySelector("#name");
const pinkSections = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
const links = document.querySelectorAll("a");

changeNameBtn.addEventListener("click", (e) => {
  const newColor = window.prompt("Enter a Color!", "#750ff7 ");
  const newName = window.prompt("Enter Your Name!");
  if (newName !== "") nameDiv.textContent = newName;
  nameDiv.style.color = "white";
  changeNameBtn.style.backgroundColor = newColor;
  pinkSections.forEach((section) => {
    section.classList.remove("pink-bg");
    section.classList.add("purple-bg");
  });
  pinkText.forEach((section) => {
    section.classList.remove("pink-text");
    section.classList.add("purple-text");
  });
  links.forEach((link) => {
    link.classList.add("purple-text");
  });
});

// CHANGE FRONT SECTION LI
const modifyBtnFront = document.querySelector("#mod-btn-front");
const ulToModify = document.querySelector("#front-dev-tools");
// const liToModify = document.querySelectorAll("#front-dev-tools li");

modifyBtnFront.addEventListener("click", (e) => {
  ulToModify.innerHTML = "";
  ulToModify.insertAdjacentHTML(
    "beforeend",
    "<li>VSCode</li><li>Github</li><li>Terminal</li>"
  );
});

// CHANGE BACK SECTION LI
const addDevToolBtn = document.querySelector("#add-dev-tool-btn");
const addDevToolInput = document.querySelector("#add-dev-tool");
const targetSection = document.querySelector("#dev-tools");
addDevToolBtn.addEventListener("click", (e) => {
  if (addDevToolInput.value != "") {
    targetSection.insertAdjacentHTML(
      "beforeend",
      `<li>${addDevToolInput.value}</li>`
    );
  }
  addDevToolInput.value = "";
});
