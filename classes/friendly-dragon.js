// Your code here
const Dragon = require('./dragon.js');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend
    }

    hasLifeGoals(){
        this.lifeGoals.forEach((goal)=>{
            console.log(`${this.name} likes to ${goal}`)
        })
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`
    }

}

// const puff = new FriendlyDragon(
//     "Puff",
//     "green",
//     [
//       "live by the sea",
//       "frolick in the autumn mist",
//       "help small children"
//     ],
//     // "Jackie Paper"
//   );
//   puff.hasLifeGoals()


module.exports = FriendlyDragon
