/*signin.js file by ypgendra */

alert("246316 is Your One-Time Password")
document.querySelector("#VerifyMe").addEventListener("submit", myfunction);

var verifyArr = JSON.parse(localStorage.getItem("verifyMe")) || [];

function myfunction() {
event.preventDefault();
var verifyObj = {
Email: document.querySelector("#Email").value,

first: document.querySelector("#First").value,
last: document.querySelector("#Last").value,
};

verifyArr.push(verifyObj);
localStorage.setItem("verifyMe", JSON.stringify(verifyArr));

var elem=document.getElementById("nil")
elem.classList.add("show")

}
function removeClass(){
 
var elem=document.getElementById("nil")
elem.classList.remove("show")
window.location.href="newpage.html"

}
