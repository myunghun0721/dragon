class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire (){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons (...dragons){
    return dragons.map((dragon)=>{
      return dragon.name;
    })

  }
}

// console
const puff = new Dragon("Puff", "green");
// console.log(puff);
// console.log(puff.breathesFire());

const dragon = new Dragon('Smoke', 'black-red');
// console.log(Dragon.getDragons(puff, dragon))

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
