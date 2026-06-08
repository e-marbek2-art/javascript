var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
if (box.style.background == "rgb(255, 0, 0)"){

  box.style.background = "rgb(53, 124, 200)";

 }else {

box.style.background = "rgb(255, 0, 0)";
 }
}