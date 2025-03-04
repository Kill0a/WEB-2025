// console.log("");

const titleRef = document.getElementById("title");

console.log(titleRef);

const = itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

const altTitleef = document.querySelector("#title");

console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".item");

console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

titleRef.innerHTML = "DOM Manipulation";

ulRef.innerHTML = "";

const melons = [
    "cantilope",
    "watermolon",
    "muskmelon",
];

for (let index = 0; index < melond.length; index++) {
    const melon = melon[index];
    ulRef.innerHTML += "<li class='item' >" + melon + "</li>";
}


// document.querySelector("").style.display = "";

titleRef.style.backgroundColor = "red";
titleRef.style.color = "00ff00";
titleRef.style.fontSize = "32px";

document.querySelector("body > ul li").style.display = "none";
document.querySelector("body > ul li").style.display = "list-item";

document.querySelector("nav ul").style.display = "flex";

const firstARef = document.querySelector("a");

console.log("first a:", firstARef);

firstARef.href = "dom.html";
firstARef.setAttribute("target", "_blank");
