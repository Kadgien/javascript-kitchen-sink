// Declaring first name in a variable
var firstName = 'Felipe';
// Declaring the amount of US States (constant)
const usStates = 50;
// Declaring the addition of two values
var numSum = 5 + 4;

// Creating a function that displays an alert saying "Hello World!"
function sayHello() {
    alert('Hello World!');
}

// Calling the sayHello function
sayHello();

// Creating a function with two argument: name and age

function checkAge (name, age) {
    if (age < 21) {
        alert("Sorry" + " " + name + ", " + "you aren't old enough to view this page!");
    }
};

// Running the checkAge function 4 times with different parameters
checkAge ("Charles", 21);
checkAge ("Abby", 27);
checkAge ("James", 18);
checkAge ("John", 17);

// Creating an array with four of my favorite vegetables

var favVegetables = ["tomato", "lettuce", "onion", "pickle"];

// Running a for loop to display all of them in the console

for (let i = 0; i < favVegetables.length; i++) {
    console.log (favVegetables[i]);
}

// Creating the 'pet' object with two properties
var pet = {
    name: 'Millo',
    breed: 'Domestic Short Hair'
};

console.log(pet);

// Creating an array with two properties: name and age
var nameList = [
    {
        fName: 'Phil',
        age: 29
    },
    {
        fName: 'Quili',
        age: 29
    },
    {
        fName: 'Ale',
        age: 17
    },
    {
        fName: 'Primo',
        age: 12
    },
    {
        fName: 'Kur',
        age: 30
    }
];

// Running a for loop which runs the checkAge function on the elements inside the nameList array

for (let i = 0; i < nameList.length; i++) {
    checkAge(nameList[i].fName, nameList[i].age);

};

function getLength (characters) {
    return characters.length;
}

var hWorldLength = getLength("Hello World!");


if (hWorldLength % 2 == 0) {
    console.log ("The world is nice and even!");
} else {
    console.log ('The world is an odd place!');
};


