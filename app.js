
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
    console.log(num)
}

printNumbers(10)

