import "./index.css";
import MY_IMAGE from "./assets/JS.jpg";

console.log("Hello World!");

const newText = document.createElement("h1");
newText.textContent = "I love JavaScript";
newText.className = "text";
document.body.append(newText);

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);
