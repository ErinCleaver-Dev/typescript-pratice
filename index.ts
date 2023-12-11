// a function to add things
// tell it that it is to add a number
// must have a return, it cannot be void.

// will automically check to make sure your returning something inside of the function
// dose not keep track of human logic. 
const add = (num1: number, num2: number): number => {
    return num1 + num2
};

console.log(add(5, 4))

// will make sure you return a number, also gives a error if you do not have return
const subtract = (num1: number, num2: number): number => {
    return num1 - num2
}

console.log(subtract(5, 4))

function divide (num1: number, num2: number): number {
    return num1/num2
}

console.log(divide(5, 4))

const multiply = function(num1:number, num2:number): number {
    return num1 * num2
}

console.log(multiply(5, 4))

//to tell a function that it will not return somthing you use void
const logger = (message: string):void => {
    console.log(message);
}

const errorMessage = (message: string): never => {
    throw new Error(message);
}

const todaysForcast = {
    date: new Date(),
    weather: 'sunny'
}

// will always be to different statements 
const printWeather = ({date, weather}: {date: Date, weather: string}): void => { 
    console.log(date);
    console.log(weather)
}

printWeather(todaysForcast)
    

// objects
const profile = {
    name: 'April',
    age: 20, 
    coords: {
        lat: 0, lng: 15
    },
    setAge(age: number) {
        this.age = age;
    }
};

// have to write out the expected stucture of age when working with objects
// only works with js 2015 and later
const { age }: {age: number} = profile;


const { coords: {lat, lng}}: 
{coords: {lat: number; lng:number}} = profile

