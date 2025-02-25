// console.log("");

console.log("Cosy home");

console.log("'2' + '2' =", "2" + "2");

console.log("My name is " + "Jay");

console.log("2 + 2 = ", 2 + Number("2"));

if (true) {
  console.log("Alwayse true");
} else {
  console.error("This should never happen");
}

let money = 0.75;

if (money >= 0.5) {
  console.log("You pay for a bus ticket");
  money -= 0.5;
} else if (money >= 0.25) {
  console.log("Catch a ride with the mysterious hat person");
  console.log("Sounds a little sketch but it's your life");
  money -= 0.25;
} else {
  console.log("You're broke, walk home");
  console.log("It'sa 5 hour walk");
}
