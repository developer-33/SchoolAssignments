// Write a function called declareTributes that accepts one parameter called listOfTributes, which will be an array of objects. That parameter could receive an argument value like this: 

// let listOfTributes = [
//     {
//         name: "Katniss Everdeen",
//         district: 12
//     },
//     {
//         name: "Cato",
//         district: 2
//     }
// ]

// // Your function should output a new array, where each element is a string written in this format:

// [
//   "Katniss Everdeen from District 12",
//   "Cato from District 2"
// ]

// Use one of the array looping methods to solve this puzzle. 


let listOfTributes = [
    {
        name: "Katniss Everdeen",
        district: 12
    },
    {
        name: "Cato",
        district: 2
    }
]

listOfTributes.forEach(function (codeObj) {{
  listOfTributes.forEach((codeObj) => {
    console.log((codeObj.name) + (codeObj.district))  
     
  });
}

declareTributes(listOfTributes)


// Prompt #2: 
// You've finally secured a great programming job at a major toy company. Things have been going pretty smoothly, but this year there's been a big problem. It appears that due to a factory accident, there are some dangerous chemicals in some of the toys. 

// Write a function called removeFaultyToys that accepts one parameter called toyInventory, which you can expect will be an array of objects, where each object is a toy's individual details. That parameter could receive an argument value like this:

let toyInventory2023 = [
  {
      name: "Puzzle Game",
      containsChemicals: true
  },
  {
      name: "Fidget Spinner",
      containsChemicals: true
  },
  {
      name: "Teddy Bear",
      containsChemicals: false
  }
]

// Your function should return a new array with only the toys that do NOT contain any dangerous chemicals. 

// Use one of the array looping methods to solve this puzzle.

function removeFaultyToys(toy){
  let goodToys = toy.filter((el) => {
      return !el.containsChemicals
  })
  console.log(goodToys)
}

removeFaultyToys(toyInventory2023)


})