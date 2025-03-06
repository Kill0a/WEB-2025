console.log("Pokemon");

// Button1
function showAlert() {
  alert("Annoying message");
}

// button2
const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
  const userConfirmed = confirm("you are a robot right?");

  console.log(userConfirmed);
}

confirmBtnRef.onclick = showConfirm;

console.log(confirmBtnRef);

// button3

function showPrompt() {
  const userInput = prompt(
    "What's your favorite flavor of ice cream?",
    "vinilla"
  );
}


// code for journey

const journeyRef = document.querySelector("#journey");\

function startJourney() {
    journeyRef.innerHTML = "<p>You are so excited to recive your first pokemon! Sitting infront of you are pokeballs for Bulbasour, Charmander, Squirtle. Choose your pokemon</p>"

    const starerPokemon = [
        {
          name: "Bulbasour", 
          img:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        },
        {
            name: "Charmander", 
            img:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
  
        },
        {
            name: "Squirtle", 
            img:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
  
        },
    ];

    for (let i = 0; i < starerPokemon.length; i++) {
        const pokemon = starerPokemon[i];
         const newSection = document.createElement("section");
         newSection.innerHTML +="<img height='100' src='" + pokemon.img + "' alt='" + pokemon.name +"' />";
         



        //  const newImg = document.createElement("img");
        //  newImg.hight = "100";
        //  newImg.src = pokemon.img;
        //  newImg.alt = pokemon.name;
        //  newSection.appendChild(newImg);


         newSection.innerHTML +="<h4>" + pokemon.name + "</h4>";

         newSection.dataset.pokemonName = pokemon.name;
         newSection.dataset.pokemonImage = pokemon.img;
         newSection.onclick = choosePokemon;

         newSection.onclick = choosePokemon;

         journeyRef.appendChild(newSection);
        console.loh(pokemon)
    }
}

function choosePokemon(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName;
    const pokemonImg = e.currentTarget.dataset.pokemonImage;

    const confirmChoie = confirm("You chose " + pokemonName + " as your starter");

    if (confirmChoie) {
        journeyRef.innerHTML += "You chose " + pokemonName + "as your starter pokemon,";

        myPokemon = { name: pokemonName, img: pokemonImg };
    }

}