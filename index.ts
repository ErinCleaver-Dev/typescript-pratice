// a const value of apples is an number that will not change
// this is a type annotation
// const apples: number = 5;

// can be change, but only to a number
let apples: number = 5

apples = 10
// if you use a string it will give a error 
// apples = 'apples'

// will only accept strings and can be changed 
console.log(apples)

let currentSpeed: string = 'fast';

// only accepts strings 
// currentSpeed = 10
console.log(currentSpeed)

// can only accept boolen
let isRunning:boolean = true;
console.log(typeof(isRunning))

// is a type of null
let aNull:null = null;
console.log(aNull)

// is a undefined type 
let nothing: undefined = undefined;
console.log(nothing)

// a object, such as type date
let now: Date = new Date();

console.log(now.getDate());

// useing Arrays 
// This is array that only accepts strings 
let colors: string[] = ['red', 'green', 'blue']

colors.forEach(color => {
    console.log(`${color}`)
});

let Sum:number[] = [10, 12, 15, 45]
let total:number = 0
Sum.forEach(item =>{
    total+=item
})

console.log(total)

// Classes
class Car {

}

// declars that car is a type car
let car: Car = new Car()
console.log(Car)

// Object literals
// list out the property names
// can use a collon or commua
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

console.log(point)

// Function
// is a description of a function 
const logNumber: (num: number) => void = (num: number) => {
    console.log(num);
}

logNumber(10)