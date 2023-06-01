let bread1 = prompt("which bread would you like to have:-")
let veggie1 = prompt("what are you favourite veggies")
let sauce1 = prompt("which sauch would you like to have:-")
 
function makesandwich (bread,veggies,sauce)
 { let sandwich = bread + "bread" + veggies + " " +sauce+ "sandwitch";
 return sandwich;
}
 let vegsandwich =makesandwich(bread1,veggie1, sauce1);
console.log(vegsandwich)



