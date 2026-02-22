// variables in js
// var , let , const

//redeclaration with var
// var myName="Sattar"
// var myName="Teeto"

// reassignment with var
// var myName="Mahar"
// console.log(myName)

//let
// redeclaration is not allowed with let


//reassignment with let
// let num=134
// num=6567
// console.log(num)

//const
//redeclaration is not allowed with const
//reassignment is not allowed with const


//Operators in JS


//Arithmetic operator
// + - * / % ++ --
// let num1 = 22
// let num2 = 4
// console.log("Addition = " + (num1 + num2))
// console.log("Subtraction = " + (num1 - num2))
// console.log("Multiplication = " + (num1 * num2))
// console.log("Division = " + (num1 / num2))
// console.log("Modulo = " + (num1 % num2))
// console.log("Increment = " + (num1++) + " current value of num1 = " + num1)
// console.log("Pre-increment = " + (++num1) + " current value of num1 = " + num1)
// console.log("Decrement = " + (num1--) + " " + " current value of num1 = " + num1)
// console.log("Pre-decrement = " + (--num1) + " current value of num1 = " + num1)


// Assignment Operators
// = += -= *= /= %=
// let a=10
// a=5
// console.log(a)
// a+=5 // a=a+5
// console.log(a)
// a-=3 // a=a-3
// console.log(a)
// a*=2 // a=a*2
// console.log(a)
// a/=4 // a=a/4
// console.log(a)
// a%=3 // a=a%3
// console.log(a)

// Comparison Operators
// == === != !== > < >= <=
// let x=10
// let y="10"
// console.log(x==y) //compares value only not data type
// console.log(x===y) //value + data type
// console.log(x!=y) //compares value
// console.log(x!==y) //value + data type
// console.log(x>y) js converts first string into number then compare
// console.log(x<y) js converts first string into number then compare
// console.log(x>=y)
// console.log(x<=y)

//Logical Operators
//  &&   ||    !!
// let age=+prompt("Enter your age:")
// if(age>0 && age<18){
//     console.log("you are child.")
// }
//     else if(age>18 && age<=60){
//      console.log("you are adult now")
//     }
//     else if(!(age<60) && age>60){
//     console.log("you are not expire now ")
//     }
//     else
//         console.log("you are not a human")

// Ternary operator
// let num=+prompt("Enter a number")
// console.log(num>=33? "you are pass":"you are fail")

// Nested ternary operator
// let marks=+prompt("Enter your marks")
// console.log(marks>=80? "A+ grade": marks>=70? "A grade": marks>=60? "B grade": marks>=50? "C grade": marks>=40? "D grade": "F grade")

// Control statements in JS
// if..else
// let age=+prompt("Enter your age:")
// if(age>=18){
//     console.log("you are eligible for vote")
// }
// else{
//     console.log("you are not eligible for vote")
// }
// if..else if..else
// let marks=+prompt("Enter your marks:")
// if(marks>=80 && marks<=100){
//     console.log("A+ grade") }

// else if(marks>=70 && marks<80){
//     console.log("A grade")}
// else if(marks>=60 && marks<70){
// console.log("B grade")}
// else if(marks>=50 && marks<60){
//     console.log("C grade")}
// else if(marks>=40 && marks<50){
//     console.log("D grade")}
// else{
// console.log("F grade")}

// Switch Statement
// let day = +prompt("Enter a number between 1 to 7")
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Invalid day")
// }


// loops in js
// for loop
//    for(let i=1;i<=10;i++){
//     console.log(i)
//    }

// while loop
// let i=10
// while(i<=20){
//     console.log(i)
//     i++
// }


// do..while loop
//  let i=20
//  do{
//     console.log(i)
//     i++
//  }
//  while(i<=25)

// break and continue statement
// for(let i=1;i<=10;i++){
//     if(i==5){
//         break; // it will terminate the loop when i=5
//     }
//     console.log(i)
// }
// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue; // it will skip the value of i=5
//     }
//     console.log(i)
// }

// functions in js
//   function call(){
//     console.log("function called")
//   }
//   call()

// function with parameter
// function add(a,b){
//     console.log("add ="+(a+b))
// }
// add(2,7)

// function with return type
// function Division(a,b){
//     return a/b
// }
// console.log("Division ="+Division(20,4))

// Arrow function with parameter
//  const sub=(a,b)=>{
//     return a-b
//  }
//  console.log("Subtraction ="+sub(10,5))

// Arrow function without parameter
//   const message=()=> "Hello, welcome to JavaScript programming!"
//     console.log(message())

// Arrow function with default parameter
//  const Full_name =(first_name="Sattar")=>{
//     console.log(first_name+" Mahar")
//  }
//  Full_name()

// Arrays in Js
// let students=["Jabbar","Sattar","Samad","Ghaffar"]
// console.log(students)

//Array Constructors
// let fruits=new Array("Apple","Banana","Mango","Orange")
// console.log(fruits)

//Array Methods
// push()   //Adds an element to the end of an array.
// let color=["Red","Green","Blue"]
// color.push("Black")
// console.log(color)

// pop()    //Removes the last element from an array.
// let color=["Red","Green","Blue","Black"]
// color.pop()
// console.log(color)

//shift()   //Removes the first element from an array.
//   let vegetables=["Carrot","Potato","Onion","Tomato"]
//   vegetables.shift()
//   console.log(vegetables)

// unshift()  //Adds an element to the beginning of an array.
// let vegetables=["Carrot","Potato","Onion","Tomato"]
// vegetables.unshift("Cabbage")
// console.log(vegetables)


// map method
// //Creates a new array by applying a function to each element of an existing array
// let fruits = ["Banana", "Orange", "Apple", "Mango"]
// let fruit = (fruit)=>{
//   return `mazy ke ${fruit}`
// }
// console.log(fruits.map(fruit))

//Filter method
// //Creates a new array with all elements that pass a test implemented by a function
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers=numbers.filter((num)=>{
//     return num%2===0
// })
// console.log(evenNumbers)

//Reduce method
// reduces the array to a single value by applying a function to each element and accumulating the result
// let numbers = [1, 2, 3, 4, 5, 6]
// let sum=numbers.reduce((accumulator, nextValue)=>{
//     return accumulator+nextValue
// })
// console.log(sum)

//Foreach method
// Executes a provided function once for each array element
// let num=[1,2,3,4]
// num.forEach((element, index, array)=>{
//     console.log(element)
//     console.log(index)
//     console.log(array)
// });

//Find method in js
//find() is an array method that returns the first element in an array that satisfies a given condition.
// let arr=[10,12,37,66,70]
// let result=arr.find(num=>num>66)
// console.log(result)

//Some method in js
//Return true if any one element passes the condition.
//Return false if none match.
// let name = [{
//     first: "Abdul",
//     last: "Sattar",
//     nickname: "teeto"
// }]
// let result = name.some(person => person.first === "Abdul");
// console.log(result);

// Every method in js
//Return true only if every element passes the condition.
// Return false as soon as one fails.
// const num=[22,23,56,77,62]
// let result=num.every(num=>num>20)
// console.log(result) // return true .
// const num=[22,23,56,77,62]
// let result=num.every(num=>num>55)
// console.log(result) //Return false

// includes method in js
// It checks if a specific exists in the array.
// Return true or false.
// let num=[10,20,48,88]
// console.log(num.includes(49))

// Destructing in arrays
// let colors=["green",["yellow","pink"],"brown"]
// let [color1,[color4,color5],color3]=colors
//let [color1,,color3]=colors // we can skip the value using comma.

// let color1=colors[0]
// let color2=colors[1]
// let color3=colors[2]

// console.log(color1)
// console.log(color4)
// console.log(color5)
// console.log(color3)

// Objects in js
// let person={
//     name:"Sattar",
//     age:20,
//     program:"BSCS"
// }
// Two ways to access object properties
// DOT Notation
// console.log(person.name)
// console.log(person.age)
// Bracket Notation
// console.log(person["program"])

// Methods in Objects
// A method is just a function inside an object.
// let name={
//     first_name:"Abdul",
//     last_name:"Sattar",
//     hello:function(){
//         return "helloSir"
//     }
// }
// OR
// let name={
//     first_name:"Abdul",
//     last_name:"Sattar",
//     hello(){
//         return "helloSir"
//     }
// }
// console.log(name.hello())

// This keyword in js
// Inside an object method,this refers to the object itself.
// let student={
//     name:"Sattar",
//     class:"web development",
//     info () {
//         console.log(`Student name is ${this.name} and class is ${this.class}`)
//     }

// }
// student.info()
// console.log(this)
// this keyword with arrow function
// const person = {
//   name: "Alex",
//   greet: () => {
//     return this.name; // ❌ Not what you expect
//   }
// };
// console.log(person.greet())

// Destructuring in object.
// Destructuring lets you extract properties into variables easily.
// let colors={
//     color1:"red",
//     color2:"blue",
//     color3:"green"
//}
//let {color1:FirstColor,color2,color3}=colors //  we  can also rename variables
// console.log(FirstColor)
// console.log(color2)
// console.log(color3)
// we can set default value.
// let={color4="pink"}=colors
// console.log(color4).

// Object.keys()
// const person = {
//     name: "Sattar",
//     Age: 20
// }
// console.log(Object.keys(person))//returns an array of property names
// // Object.values 
// console.log(Object.values(person)) // returns an array of property value
// // Object.entries
// console.log(Object.entries(person)) // returns an array of key value-pairs

// for (const [key, value] of Object.entries(person))
//     console.log(`${key}:${value}`) // both can dispaly with loop

// Strings in js 
// let str = "Hello, World!"
// String length
// console.log(str.length)     

// String concatenation
// let str1 = "Hello"  
// let str2 = "World"
// console.log(str1 + " " + str2)

// toUpperCase and toLowerCase
// let name="sattar"
// let name2="SATTAR"
// console.log(name.toUpperCase())
// console.log(name2.toLowerCase())

// Include
// let test= "heelo"
// console.log(test.includes("h"))

// indexOf
// let Caste="Mahar"
// console.log(Caste.indexOf("h"))
// Slice // it extracts 
// console.log(Caste.slice("1, 2"))

// Replace
// let str="hello Sir"
// let str2=str.replace("Sir", "Dear")
// console.log(str2)


// 1. Global vs Local Scope
// Global Scope: Variables declared outside functions are accessible anywhere in the code.

// Local Scope: Variables declared inside a function are accessible only within that function.



// 2. Block Scope
// Block Scope: Variables declared with let or const are only accessible inside the block they are defined in (e.g., inside {}).


// 3. Hoisting
// Hoisting: JavaScript moves variable and function declarations to the top of their scope during compilation. 
// var is initialized with undefined, while let and const are not initialized (temporal dead zone).


// 4. Lexical Scope
// Lexical Scope: Functions remember the scope in which they were defined, 
// not where they are called. Scope is determined by code structure.

// ===== 1. Selecting Elements =====
// const header = document.getElementById("myHeader");
// const items = document.getElementsByClassName("list-item");
// const paragraphs = document.getElementsByTagName("p");
// const firstItem = document.querySelector(".list-item");
// const allItems = document.querySelectorAll(".list-item");

// ===== 3. Creating & Removing Elements =====
// const newItem = document.createElement("li");
// newItem.textContent = "New Item";
// list.appendChild(newItem);           // Add
// list.removeChild(list.firstChild);   // Remove

// ===== 4. Events & Event Listeners =====
// button.addEventListener("click", () => alert("Clicked!"));
// button.addEventListener("mouseover", () => button.style.backgroundColor = "yellow");

// ===== 5. Event Bubbling & Capturing =====
// parent.addEventListener(
//   "click",
//   () => console.log("Parent capturing"),
//   true // capturing
// );
// parent.addEventListener("click", () => console.log("Parent bubbling")); // bubbling
// child.addEventListener("click", (e) => {
//   console.log("Child clicked");
//   e.stopPropagation(); // stop bubbling
// });


// ---------------------------
// 1. let & const
// ---------------------------
// let count = 0;      // can reassign
// const name = "Alice"; // cannot reassign

// ---------------------------
// 2. Arrow Functions
// ---------------------------
// const add = (a, b) => a + b; // short syntax
// const square = n => n * n;   // single param, no parentheses

// ---------------------------
// 3. Spread & Rest Operators
// ---------------------------
// Spread (expand)
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Rest (collect)
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// ---------------------------
// 4. Destructuring
// ---------------------------
// Array
// const [x, y] = [10, 20];

// Object
// const user = { name: "Bob", age: 25 };
// const { name, age } = user;

// ---------------------------
// 5. Modules (import/export)
// ---------------------------
// math.js
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;

// main.js
// import { add, multiply } from './math.js';
// console.log(add(2, 3));

// ---------------------------
// 6. Optional Chaining (?.)
// ---------------------------
// const profile = { name: "Alice" };
// console.log(profile?.name);       // Alice
// console.log(profile?.account?.id); // undefined

// ---------------------------
// 7. Nullish Coalescing (??)
// ---------------------------
// const username = null;
// const displayName = username ?? "Guest";
// console.log(displayName); // Guest

// Asynchronous javascript 
// JavaScript can only do one thing at a time.
// But sometimes things take time (like:
// downloading data
// waiting 2 seconds
// reading a file)
// Instead of freezing everything, JavaScript says:
// “I’ll start this task… and while waiting, I’ll do other things.”
// That’s asynchronous.

// Callbacks in js 
// A callback is:
// “When you’re done, call this function.”
// setTimeout(function(){
//     console.log("hello")
// },3000
// )
// function greet(name, callback){
//     console.log("hi "+name)
//     callback()
// }
// function sayby(){
//     console.log("good by");
// }
// greet("Sattar", sayby)

// Promises in js 
// A Promise is:
// “I promise I will give you a result later.”
// It can:
// succeed ✅
// fail ❌

// function randomResult(){
    // return new Promise((resolve,reject)=>{
        // const success = Math.random()>0.5
//         if(success){
//          resolve("It worked")
        // }
//         else{
//             reject("it failed")
        // }
//     }
// )}
// randomResult()
// .then(result=>console.log(result))
// .catch(error=>console.log(error))

// Async/await
//This is just a nicer way to use promises
// function waitTwoSeconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Done waiting!");
//     }, 5000);
//   });
// }

// async function run() {
//   console.log("Start");

//   const message = await waitTwoSeconds();
//   console.log(message);

//   console.log("End");
// }

// run();

// Error handling with try/catch
function divideNumbers(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Both inputs must be numbers.");
    }

    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }

    let result = a / b;
    console.log("Result:", result);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Test cases
divideNumbers(10, 2);   // Valid
divideNumbers(10, 0);   // Division by zero
divideNumbers(10, "5"); // Invalid type
