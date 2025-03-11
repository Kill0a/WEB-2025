// Refrence to DOM
const menuRef = document.querySelector("#menu");

// Data
const menuItems = [
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_202106_0336_LargeVanillaCone_1564x1564-1:nutrition-calculator-tile",
    name: "vinilla Cone",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1509_MediumChocolateShake_Glass_A1_1564x1564-1:nutrition-calculator-tile",
    name: "ChocolateShake",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1513_MediumStrawberryShake_Glass_A1_1564x1564-1:nutrition-calculator-tile",
    name: "Strawberry Shake",
  },
];

menuRef.innerHTML = "";

for (let i = 0; i < menuItems.length; i++) {
  const element = menuItems[i];

  const newArticle = document.createElement("article");
  constnewImg = document.createElement("img");
  newImg.src = menuItems.image;
  newArticle.appendChild(newImg);

  const newP = "<p>" + item.name + "</p>";
  newArticle.innerHTML += newP;

  menuItems.appendChild(newArticle);
}
