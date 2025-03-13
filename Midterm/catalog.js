const menuRef = document.querySelector("#catalog");

const menuItems = [
  {
    image: "",
    name: "",
  },
  {
    image: "",
    name: "",
  },
  {
    image: "",
    name: "",
  },
];

catalogRef.innerHTML = "";

for (let i = 0; i < catalog.length; i++) {
  const element = catalog[i];

  const newArticle = document.createElement("article");
  constnewImg = document.createElement("img");
  newImg.src = menuItems.image;
  newArticle.appendChild(newImg);

  const newP = "<p>" + item.name + "</p>";
  newArticle.innerHTML += newP;

  menuItems.appendChild(newArticle);
}
