const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/alaska1.png") {
    myImage.setAttribute("src", "images/yijun luo.png");
  } else {
    myImage.setAttribute("src", "images/alaska1.png");
  }
};

let myButton = document.querySelector("button");
myButton.onclick = () => {
  setUserName();
};
  
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}`;
  }
}
  

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  myHeading.textContent = `Yijun Luo`;
}
  