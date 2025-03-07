
// part 1: thinking functionally
let numbers = [2,3,2,5]

// add all the numbers in an array
let addNumsInArray = (arr) => {
    let sum = 0
    arr.forEach((number) => {
        sum = number + sum
    });
    return sum
}

console.log(`Sum of numbers array`, addNumsInArray(numbers), '\n')

// to get the average a group of numbers you have to add them all up and then divide it by the amount of numbers, so we can use our function created previously
let avgOfNumbers = (arr) => {
    let avg;
    let sumOfNumbers = addNumsInArray(arr)
    avg = sumOfNumbers/numbers.length

    return avg
}

console.log(`Average of numbers array`, avgOfNumbers(numbers), '\n')


// Take an array of strings and return the longest string.
let strings = [
    "i like cake",
    "cat",
    "clifford the big red dog",
    "dog",
]

let returnLongestString = (arr) => {
    // start string counter at 0
    let longestStr = 0
    // get the string index so we can display the actual string to the console
    let longestStrIndex;
    arr.forEach((str, i)=> {
        if(str.length > longestStr) {
            longestStr = str.length
            longestStrIndex = i
        }
    })
    console.log(`the longest string is ${strings[longestStrIndex]} at index ${longestStrIndex}, with a length of ${longestStr}`)
    return longestStr
}

console.log(`The longest string in the array is`,returnLongestString(strings), '\n')


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

let compareStringToNumber = (arrOfStrings, number) => {
    // new array to push a string from the strings array if greater than the argument number
    let newArr = []
    arrOfStrings.forEach((str) => {
        if(str.length > number) {
            newArr.push(str)
        }
    })
    return newArr
}

console.log(compareStringToNumber(strings, 5))


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(num) {
    if (num < 1) {
        return
    }

    printNumbers(num - 1)
    console.log(num + "\n")
}

printNumbers(10)



// Part 2: Thinking Methodically

let ppl = [
    { 
        id: "42", 
        name: "Bruce", 
        occupation: "Knight", 
        age: "41" 
        
    },
    { 
        id: "48", 
        name: "Barry", 
        occupation: "Runner", 
        age: "25"
    },
    { 
        id: "57", 
        name: "Bob", 
        occupation: "Fry Cook", 
        age: "19" 
    }, 
    { 
        id: "63", 
        name: "Blaine", 
        occupation: "Quiz Master", 
        age: "58" 
    }, 
    {
        id: "7", 
        name: "Bilbo", 
        occupation: "None", 
        age: "111" 
    }
]

// Sort the people array by age youngest to oldest
let sortPplYoungestToOldest = (pplArray) => {

    // array.sort method learned from w3schools array methods
    pplArray.sort((person1, person2) => {
        // convert age strings to numbers to compare them
        return Number(person1.age) - Number(person2.age)
    });

    return pplArray // return the sorted array
}

console.log(sortPplYoungestToOldest(ppl)) // log the sorted array

// Filter the array to remove entries with an age greater than 50.
let peopleUnderFifty = (pplArray) => {
    let newPplArr = pplArray.filter((person)=> {
        // have to turn age into number again to compare with 50
        if(Number(person.age) <= 50) {
            // return each person to new array
            return person
        }
    })
    return newPplArr
}

console.log('remove people under fifty', peopleUnderFifty(ppl))



// Map the array to change 'occupation' to 'job' and increment age by 1
let updatedPpl = (pplArray) => {
    // further learned .map() from w3 schools array methods when noticiing the keywords 'map the array' in the assignment
    let newArr = pplArray.map(person => {
        return {
            id: person.id,
            name: person.name,                  
            job: person.occupation,     
            age: Number(person.age) + 1 
        }
    })
    return newArr
}

console.log('change occupation to job and increment age by 1', updatedPpl(ppl))

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

let sumOfAges = ppl.reduce((acc, person) => {
    return acc + Number(person.age) // Convert age to number and add it to the accumulator
}, 0)

// Calculate the average age
let avgAge = sumOfAges / ppl.length

console.log(`sum of ages is ${sumOfAges} and average age is ${avgAge}`)


// Part 3: Thinking Critically

// develop function to take an object and increment its age field
let incrementAgeField = (person) => {
    person.age = Number(person.age) + 1
    return person
}

console.log(incrementAgeField(ppl[0]))

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
let makeCopyAndIncrement = (person) => {
    let newObj = {
        ...person,
        age: Number(person.age) + 1
    }
    return newObj
}
console.log(makeCopyAndIncrement(ppl[1]))