//Exercise 1
// let h1 = document.querySelector("h1");
// console.log(h1);
// let remove = document.getElementsByTagName("p")[3];
// remove.remove("p");

// let h2 = document.querySelector("h2");
// h2.addEventListener("click", function () {
//   h2.style.backgroundColor = "red";
// });

// let h3 = document.querySelector("h3");
// h3.addEventListener("click", function () {
//   h3.style.display = "none";
// });

// let btn = document.getElementById("toggleBold");
// let bold = document.querySelectorAll("p");
// console.log(bold);

// btn.addEventListener("click", function () {
//   for (i = 0; i < bold.length; i++) {
//     bold[i].style.fontWeight = "bold";
//   }
// });
//-----------------------------------------------------------------------------------------------------------------------------------
//Exercise 2
// let form = document.getElementsByTagName("form")[0];
// console.log(form);
// let input1 = document.getElementById("fname");
// console.log(fname);
// let input2 = document.getElementById("lname");
// console.log(lname);
// let input3 = document.getElementById("submit");
// console.log(submit);

// let name = document.getElementsByName("name");
// console.log(name);
//-----------------------------------------------------------------------------------------------------------------------------------
//Exercise 3
let allBoldItems = document.getElementsByTagName("strong");
// window.onload = getBold_items;

// function getBold_items() {
//   allBoldItems = document.getElementsByTagName("strong");
// }
function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue";
  }
}

function return_normal() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------
//Exercise 4
// function volume_sphere() {
//   let volume;
//   let radius = document.getElementById("radius").value;
//   radius = Math.abs(radius);
//   volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//   volume = volume.toFixed(4);
//   document.getElementById("volume").value = volume;
//   return false;
// }
// window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;