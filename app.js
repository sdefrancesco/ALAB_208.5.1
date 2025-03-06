
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

console.log(`Sum of numbers array`, addNumsInArray(numbers))

// to get the average a group of numbers you have to add them all up and then divide it by the amount of numbers, so we can use our function created previously
let avgOfNumbers = (arr) => {
    let avg;
    let sumOfNumbers = addNumsInArray(arr)
    avg = sumOfNumbers/numbers.length

    return avg
}

console.log(`Average of numbers array`, avgOfNumbers(numbers))