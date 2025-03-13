const menuRef = document.querySelector("#catalog");

const catalogItems = [
  {
    image: "https://picsum.photos/200/200",
    name: "img1",
  },
  {
    image: "https://picsum.photos/200/200",
    name: "img2",
  },
  {
    image: "https://picsum.photos/200/200",
    name: "img3",
  },
  {
    image: "https://picsum.photos/200/200",
    name: "img4",
  },
  {
    image: "https://picsum.photos/200/200",
    name: "img5",
  },
  {
    image: "https://picsum.photos/200/200",
    name: "im6",
  },
];

// Is not updating!!???

catalogRef.innerHTML = "catalog";
for (let i = 0; i < catalog.length; i++) {
  const element = catalog[i];

  const newArticle = document.createElement("article");
  constnewImg = document.createElement("img");
  newImg.src = catalogItems.image;
  newArticle.appendChild(newImg);

  const newP = "<p>" + item.name + "</p>";
  newArticle.innerHTML += newP;

  menuItems.appendChild(newArticle);
}
