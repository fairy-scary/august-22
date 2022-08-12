//W2D2 ARRAY DESTRUCTURING

//let coat, top, bottoms, hat

let summerClothing = ["rain coat", "tshirt", "shorts", "baseball hat"];
let autumnClothing = ["warm coat", "hoodie", "jeans", "beanie"];

//***uses declared variables made before destructing (line 3)***
//[coat, top, bottoms, hat] = summerClothing;
//console.log(coat + ",",top + ",",bottoms + ",",hat);

//***without declaring variables first...***
let [coat, top, bottoms, hat] = summerClothing;
//console.log(top + ",",coat + ",",hat + ",",bottoms);

//***reassinging entire array***
//[coat, top, bottoms, hat] = autumnClothing;
//console.log(coat + ",",top + ",",bottoms+ ",",hat);

// //***swapping variables with array destructuring***
let fastestRoute = "Highways";
let slowestRoute = "Back Roads";

//[fastestRoute, slowestRoute] = [slowestRoute, fastestRoute];

//console.log(fastestRoute+" are fast", slowestRoute+" are slow")


//W2D2 OBJECT DESTRUCTURING

const packedCar = {

    tent: {
        description: {
            size: "2-person",
            style: "backpacking",
            brand: "Decathalon"
        },
        stakes: 12,
        poles: 6,
        rainfly: 1,
    },

    cooler: {
        drinks: 12,
        protien: 12,
        dairy: {
            cheese: 2,
            milk: 1,
            yogurt: 1,
        },
        produce: 6,
    },

    kitchen_kit: {
        stove: function() {
            console.log("🔥")
        },

        coffee_grinder: function() {
            console.log("☕")
        },

        can_opener : function() {
            console.log("🥫")
        },

        cookware: {
            pots: 1,
            pans: 1,
            utensils: 8,
            knives: 3,
            cutting_board: 1,
            table_setting: 1,
        },

        dry_goods: {
            spices: ["salt", "pepper", "garlic powder", "smoked paprika", "cinnamon", "Tajin"],
            oils: 2,
            canned: 3,
            baking: 5,
            coffee: 2,
            tea: 2,
            candy: 8,
            snacks: 6,
            fire_supplies: 3,
            cleaning_supplies: 5,
        }
    },

    bedding: {
        pillows: 1,
        sleeping_bag: 1,
        mat: 1,
    }

}

// //***extracting keys as variables***
//  let { tent, bedding } = packedCar;
// console.log(tent);
// console.log(tent.description);

// let { description } = tent;
// console.log(description);

// let { size } = description;
// console.log(size);

// //***nested destructuring and dot notation interaction***
// let { kitchen_kit: {
//     cookware: {
//         pots, knives
//     }
// } } = packedCar;
// console.log(pots);
// console.log(knives);

//***IMPORTANT: need to use dot notation to mutate value!(move above destructuring, then pots variable logs 3)***
// packedCar.kitchen_kit.cookware.pots = 3;
// console.log(packedCar.kitchen_kit.cookware.pots);

// let { kitchen_kit: {
//     cookware: {
//         pots, knives
//     }
// } } = packedCar;

// console.log(pots);

//***aliased object destructuring***
// let { cooler } = packedCar;

// let { drinks: soda, dairy: plant_base_dairy } = cooler;

// console.log(soda);

//***cleaner code with dot notation when destructuring nested object(2-deep)***

//let { kitchen_kit: { dry_goods: { spices } } } = packedCar;

//***VS.***

//let { spices } = packedCar.kitchen_kit.dry_goods;

//console.log(spices);


// //*** ...rest with array destructuring***
// let [firstSpice, secondSpice, ...otherSpices] = spices;
// console.log(firstSpice)
// console.log(secondSpice)
// console.log(otherSpices)

// //*** ...rest with object destructuring(limited compatability)***
// let { tent, cooler, ...otherStuff } = packedCar;
// console.log(tent); 
// console.log(cooler);
// console.log(otherStuff); 
