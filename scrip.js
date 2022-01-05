// Lesson task 1.1
//Console log the current day of the week
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
/*Given the following variable declaration var animal = “cat”; write an if-else-if-if statement that checks the value of animal. Check if animal is equal to “parrot”. If it is, console log the string “The animal has two legs”. Check if animal is equal to “cat”. If it is, console log the string “The animal has four legs”. If animal is neither “parrot” nor “cat”, console log the string “The animal has an unknown amount of legs”. Check your code by changing the value of the animal variable.*/
var animal = "cat";
console.log(animal)
if (animal === "parrot") {
    console.log("the animal has two legs");
}
else if(animal === "cat") {
    console.log("The animal has four legs");
}
else if (animal !== "cat" + "parrot") {
    console.log("The animal has an unkonwn amount of legs");
}













