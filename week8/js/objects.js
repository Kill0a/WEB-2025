function attack(enemyDef) {
    const dmg = this.atk - enemyDef;
    if (dmg <= 0) {
      return 0;
    } else {
      return dmg;
    }
  }
}


// Objects
const person = {
  // Properties (cariables that belong to this object)
  name: "Jay the necromancer",
  hp: 7,
  def: 4,
  atk: 4,
  spd: 3,

  // Methods (functions that belong to this object)
  attack:attack
    

  takeDamage(damageAmount) {
    this.hp -= damageAmount;
  },
};

function showHp() {
  console, log("HP:", this.hp);
}

// Person atttaks slime
const jayDmg = person.attack();
console.log("Slime HP:", enemy.hp);

enemy.takeDamage(jayDmg);
console.log("Slime HP", enemy.hp);


const characters = [
    {name: "Bob", hp: 2, atk: 1},
    {name: "Henry", hp: 4, atk: 7},
    {name: "Jay", hp: 1, atk: -1},
    {name: "Susan", hp: 5, atk: 3},
];


console.log("First charicter:", characters[0].name);