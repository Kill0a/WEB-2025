function startStory() {
  let userName = prompt("What are you called?");

  if (!userName) {
    userName = "Explorer";
  }

  alert(`Welcome, ${userName}! You find yourself at a spooky forest.`);

  let choice1 = confirm("Do you want to enter the forest?");

  if (choice1) {
    let choice2 = prompt(
      "You see two paths: left and right. Which one do you choose? (type 'left' or 'right')"
    );

    if (choice2.toLowerCase() === "left") {
      let choice3 = confirm("A ghoul appears! Do you want to fight it?");

      if (choice3) {
        alert(
          "You bravely fight the ghost and win! You find a hidden treasure. You live happily ever after!"
        );
      } else {
        alert("You run away from the ghost, but it follows you... Game Over!");
      }
    } else if (choice2.toLowerCase() === "right") {
      let choice4 = confirm(
        "You find a box of old books. Do you want to read one?"
      );

      if (choice4) {
        alert("The book teaches you powerful spells! You become a wizard!");
      } else {
        alert(
          "You leave the box, but the tres seems to shift around you... You're trapped forever!"
        );
      }
    } else {
      alert(
        "You stand frozen, unsure what to do. The light slowly fades away... Game Over."
      );
    }
  } else {
    alert(
      "You run away. You escape safely, but you’ll always wonder what was inside..."
    );
  }
}

startStory();
