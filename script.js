// Lesson task 1.1
//Console log the current day of the week/
var d = new Date();
console.log(d);
var day= d.getDay();
//Console log 3 multiplied by 6
console.log(3 * 6);
// Using the alert() method, alert your name, e.g. alert(“Marie”);
//alert("Lisa");
// Lesson task 1.2
//Create a variable called animal and assign it the string value “frog”.
var animal = "frog";
console.log(animal);
//Create a variable called delivered and assign it the boolean value true.
var delivered = true;
console.log(delivered);
//Create a variable called score and assign it the number value 12.
var score = 12;
console.log(score);
//Create a variable called fullName and assign it the result of joining the string values “John” and “Smith”.
var firstName = "John";
var lastName = "Smith";
var fullName = firstName + " " + lastName;
console.log(fullName);
//Use the typeof operator to find out the type of the fullName variable. Assing the result to a variable called nameType.
console.log(typeof (fullName)); //string
var nameType = typeof (fullName);
console.log(nameType);// string
/*
Given the following variable declaration var age = 10; write an if-else statement that checks if age is greater than or equal to 7. If it is, console log the string “Greater than or equal to 7”. If it is not, console log the string “Less than 7”.
 */

var age = 10;
if(age >= 7) {
    console.log("Grater than or equal to 7");
}
else if (age < 7) {
    console.log("Less than 7");
}
//Given the following variable declaration var animal = “cat”; write an if-else-if-if statement that checks the value of animal.
//Check if animal is equal to “parrot”. If it is, console log the string “The animal has two legs”. Check if animal is equal to “cat”. If it is, console log the string “The animal has four legs”. If animal is neither “parrot” nor “cat”, console log the string “The animal has an unknown amount of legs”. Check your code by changing the value of the animal variable.*/

var animal = "cat";
console.log(animal)
if (animal === "parrot") {
    console.log("the animal has two legs");
}
else if(animal === "cat") {
    console.log("The animal has four legs");
}
else if (animal !== "cat" + "parrot") {
    console.log("The animal has an unknown amount of legs");
}
//Write a for loop that logs a number from 1 to 5
for (var count = 1; count <=5; count++){
 console.log(count);
}
//Write a for loop that logs a number from 7 to 16
for (var count = 7; count <=16; count++){
 console.log(count);
}

//Given this array var animals = [“dog”, “cat”, “frog”]; use a for loop to console log each animal in the array.
/*
var animals = [
    "dog",
    "cat",
    "frog"
];

console.log(animals);

var numberOfAnimal = animals.length;
console.log(numberOfAnimal);

for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for (var i = 0; i < numberOfAnimal; i++) {
    console.log(animals[0]);
}
for (var i = 0; i < numberOfAnimal; i++) {
    console.log(animals[1]);
}
for (var i = 0; i < numberOfAnimal; i++) {
    console.log(animals[2]);
}

for (i = 5; i<=25; i++){
    console.log(i);
}
var smallAnimal = [
    "cat",
    "dog" ,
    "fish",
    "ant"
];
var profile = [
    {name:"Lisa"}  ,
    {surname: "Grant"},
    {age: "32"},
    {work: "student"}
];
var colour = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "big",
    "red",
    "red"
];

console.log(colour[0]);
console.log(colour[1]);
console.log(colour[2]);
console.log(colour[3]);

var numberOfColour = colour.length;
//console.log(numberOfColour);
//console.log(colour.length);


var selectedNumber = 70;

if (selectedNumber >= 10 && selectedNumber <=50) {
    console.log("all good");
}
else {
    console.log("no good")
}

var dayOfTheWeek = "saturday";
if (dayOfTheWeek === "saturday" || dayOfTheWeek === "sunday") {
    console.log("good stuff!!!!")
}
else {
    console.log("sad times")
}

if (true && true) {
    console.log("here");
}

if (true || false) {
    console.log("party");
}

var someArray = ["lisa","linda","emil","uzo"];
//var numberOfArryItems = someArray.length;
//console.log("number of items",numberOfArryItems);
console.log(someArray.push("carl"));
console.log(someArray);
console.log(someArray.push("Robin"));
console.log(someArray);
console.log(someArray.push("Mia"));
console.log(someArray);
someArray.push("Sara");
/*console.log(someArray);
someArray.pop();
console.log(someArray);
someArray.unshift("lisa");
console.log(someArray);*/
/*
 var pets = [
     {
         type: "cats",
         age: 5.5,
     },
     {
         type:"dog",
         age: 3.8,
     },
     {
         type: "parrot",
         age: 4.0,
     },
 ];

 for (var i = 0; i < pets.length; i++) {
     if (pets[i].age >= 4) {
         console.log(pets[i].type);
     }
 }


var food = [
    "Taco",
    "pizza",
    [ "cake", "cat", "party"],
    [ "food", "is", "good"],

];
 console.log(food);

 var myDog = {
     name: "Mike",
     breed: "Collie",
     legs: 4
 };

 console.log(myDog.name);
 console.log(myDog.legs);
 console.warn(myDog);


 // trying functions.

function logWord (theWord) {
    console.log("The word passed in is " + theWord);
}

logWord("party");
logWord("cat");
logWord("fish");

function  createLikeCounter (likeCounter) {
    return "<div><b>" + likeCounter + "</b> likes</div>";
}
var counter = createLikeCounter(90);

console.log(counter);
// function with two arguments
function AddTwoNumbers(number1, number2) {
    var sum = number1 + number2;
    console.log(sum);
}
AddTwoNumbers(3,6);

//making sens of how to use function

function addingNumbers(numberOne, numberTwo) {
    var total = numberOne + numberTwo;
    console.log(total);
}
addingNumbers(10,4);
addingNumbers(44,79);
addingNumbers(87,44);
addingNumbers(90,55);
addingNumbers(900,675);

//more
function nameGenerator (topName, downName) {
    var allName= topName + " " + downName;
    return allName;
}

var personOne = nameGenerator("Daniel","Woods");
console.log("hello " + personOne);
var personTwo = nameGenerator("lisa", "Grant");
console.log("Hello " + personTwo);

//task from class

function addingNumbers(numberOne, numberTwo) {
    var total = numberOne + numberTwo;
    console.log(total);
}

function TwoCoulours(col1, col2){
    console.log(col1, col2);
}
TwoCoulours("blue", "red");


function MoreColToTry(col3, col4, col5) {
    console.log(col3 + " is the best colour " + col4 + " and " + col5 + " not nice");
}
MoreColToTry("green", "red", "lilla");

function getNumberOfLikes (numberOfLikes) {
    return numberOfLikes + " likes";
}

var totalNumberOfLikes = getNumberOfLikes(40);
console.log(totalNumberOfLikes)
*/
/*

function getSum(num1, num2){
    console.log(num1 + num2);
}
getSum(109,288);

function getMulti(num1, num2){
    console.log (num1 * num2);
}

getMulti(9,3);

function getAllNames(name1, name2, name3) {
    console.log("hello " + name1 + " " + name2 + " " + name3);
}

getAllNames("lisa", "Grant", "Woods");
*/
//Create a function called printName.
  //  Give the function one argument called name.
    //Inside the function console log the name argument.
    //Call the function and pass your name in as an argument.
    //Create a function called returnName that accepts one argument called name.
    //Inside the function add the string “Hello “ to the argument and return it.
    //Call the function, pass in your name as the argument and assign the return value to a variable.
    //Console log the variable. It should log, for example, “Hello John”.

/*function printName(name){
    console.log(name);
}
printName("Lisa");*/
/*
function returnName(name) {
    return "hello " + name;
}

var greetings = returnName("lisa");
console.log(greetings);

/*
var square = function (number) {
    return number * number
};

var x = square(10);
console.log(x);
//var x = square(4);*/

function printName (name) {
 console.log( name);
}
printName("Lisa");

function returnName(name) {
    return "Hello " + name;
}

var helloOnYou = returnName("Lisa") ;
    console.log(helloOnYou);
