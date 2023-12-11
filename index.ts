// a const value of apples is an number that will not change
// this is a type annotation
// const apples: number = 5;

// can be change, but only to a number
let apples = 5

apples = 10
// if you use a string it will give a error 
// apples = 'apples'

// will only accept strings and can be changed 
console.log(apples)

let currentSpeed = 'fast';

// only accepts strings 
// currentSpeed = 10
console.log(currentSpeed)

// can only accept boolen
let isRunning = true;
console.log(typeof(isRunning))

// is a type of null
let aNull = null;
console.log(aNull)

// is a undefined type 
let nothing = undefined;
console.log(nothing)

// a object, such as type date
let now: Date = new Date();

console.log(now.getDate());

// useing Arrays 
// This is array that only accepts strings 
let colors = ['red', 'green', 'blue']

colors.forEach(color => {
    console.log(`${color}`)
});

let Sum = [10, 12, 15, 45]
let total:number = 0
Sum.forEach(item =>{
    total+=item
})

console.log(total)

// Classes
class Car {

}

// declars that car is a type car
let car = new Car()
console.log(Car)

// Object literals
// list out the property names
// can use a collon or commua
let point = {
    x: 10,
    y: 20
}

console.log(point)

// Function
// is a description of a function 
// type annotation is needed in functions 
const logNumber: (num: number) => void = (num: number) => {
    console.log(num);
}
console.log("Coordinates function: ")

logNumber(10)

// When to use annotations 
// 1) first is when you have a function that returns the 'any' type.

const json = '{"x": 10, "y": 20}';

// const coordinates:any = JSON.parse(json);
// to be more extact with values from a JSON
const coordinates: {x: number, y:number} = JSON.parse(json)
console.log("Coordinates any type: ")
console.log(coordinates)
// it is used when you call a function that returns type any 


// 2) When declared on one line, and place the value on another.
let words = ['red', 'green', 'blue']
let foundWord:boolean

words.forEach(word => {

    if(word == 'green') {
        foundWord = true
        console.log(`The word green was found ${foundWord}`)
    } 
});

// 3) When you have a variable that has a type that can't be inferred.  
let numbers = [-10, -1, 12, -5, 4];
// can either be a number or a boolean
let numberAboveZero: number|boolean = false

// the for each only prints the number if it is below 0
numbers.forEach(number => {
    if(number > 0) {
        numberAboveZero = number
        console.log(numberAboveZero)
    } else {
        numberAboveZero = false
    }
})