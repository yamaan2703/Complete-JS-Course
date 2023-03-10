// Variables
// var a = 69
// console.log(a)


// Chapter # 01
// var a = {
//     name: "Yamaan",
//     section: 1,
//     principle: false,
// }
// a['friend'] = "Ali"
// console.log(a)

// Chapter # 02
// Assignment Operators
// a = 5 
// a += 2
// a -= 2
// // a **= 2  power
// console.log(a)

// Comprasion Operators
// let comp1 = 6
// let comp2 = "6"
// console.log("comp1 == comp2 is", comp1 == comp2)
// console.log("comp1 != comp2 is", comp1 != comp2)
// console.log("comp1 === comp2 is", comp1 === comp2)
// console.log("comp1 !== comp2 is", comp1 !== comp2)

// Logical Operators
// let a = 6
// let b = 7
// console.log(a < b && a == b)
// console.log(a > b || a == b)


// Conditional Expression
// let a = prompt("What is Your Age")
// console.log(typeof a)
// if(a < 0){
//     alert("This is an invalid age")
// }
// else if(a < 9){
//     alert("You are kid and you can't even think of driven")
// }
// else if(a < 18 && a >= 9){
//     alert("You are kid and you even think of driving after 18")
// }
// else{
//     alert("You can drive as you above 18")
// }
// console.log("You Can" (a < 18? "not Drive" :"Drive"))


// Tut # 8
// Chapter # 2 PS
// prob 1
/*
var age = prompt("What is Your Age")
if(age > 10 && age < 20){
    console.log("hellow World")
}
else{
    console.log("Not match")
}
*/
// Prob 2
/*
var age = prompt("What is Your Age")
switch (age) {
    case "12":
        console.log("Your age is 12")
        break
        case "13":
            console.log("Your age is 13")
        break
    case "14":
        console.log("Your age is 14")
        break
        case "15":
            console.log("Your age is 15")
            break
            case "16":
                console.log("Your age is 16")
                break
                case "17":
                    console.log("Your age is 17")
                    break
                    default:
                        console.log("Your age is Special")
                    }
                */

// prob 3
/*
var num = prompt("What is Your Number")
// num = Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0){
    console.log("Your Number is divisible by 2 and 3")
}
else{
    console.log("Your Number is not divisible by 2 and 3")
}
*/

// prob 4
/*
var num = prompt("What is Your Number")
// num = Number.parseInt(num)
if(num % 2 == 0 || num % 3 == 0){
    console.log("Your Number is divisible by 2 and 3")
}
else{
    console.log("Your Number is not divisible by 2 and 3")
}
*/

// prob 5
/*
var age = 16
var a = age > 18 ? "You are Drive": "You are not Drive"
console.log(a)
*/



// Tut # 09
// For Loop
/*
var sum = 0
var n = prompt("Enter the Value of n")
var n = Number.parseInt(n)
for(var i = 0; i < n; i++){
    sum += (i + 1)
}
console.log("Sum of First" + n + "Natural Number is"  +  sum)
*/

// Write a program to print name 10 times
/*
var name = prompt("Enter Your Name")
for(var i = 0; i < 10; i++){
    // console.log((i + 1), "+") 
    console.log(name)
}
*/

// For in loop
/*
var obj = {
    Yamaan: 95,
    Fizza: 93,
    Ali: 90, 
    Alina: 85,
}
for(var a in  obj){
    console.log(obj)
}
*/

// while loop
/*
var n = prompt("Enter a value of n")
n = Number.parseInt(n)
i = 0;
while(i < n){
    i++;
    console.log(n)
}
*/

// do while lood
/*
var n = prompt("Enter a value of n")
n = Number.parseInt(n)
i = 0;
do{
    i++;
    console.log(n)
}while(i < n)
*/

// Functions
/*
function onePlusAvg(x , y){
    return 1 + (x + y) / 2
}
let a = 1;
let b = 2;
let c = 3;

console.log("One plus of Avg a and b is", onePlusAvg(a , b))
console.log("One plus of Avg b and c is", onePlusAvg(b , c))
console.log("One plus of Avg a and c is", onePlusAvg(a , c))
*/

// Arrow Function (Use In a Advance JS.)
/*
const hello = () => {
    console.log("Hey how are you. I am fine")
}
hello()
*/


// Tut # 12
// Practice Set on Loops and Functions Ch # 03
/*
let marks = {
    yamaan: 85,
    ali: 75,
    saim: 79,
    rayyan: 91,
}
// prob # 1
for(let i = 0; i < Object.keys(marks)[i].length; i++){
    // console.log("The Number of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// prob # 2
for(let key in marks){
    // console.log("The Number of " + key + " are " + marks[key])
}

// prob # 3
                        // Problem in thi Question
let ch = 45
let i
while(i != ch){
  i = prompt("Enter a Number");
}
console.log("You have Enter a correct Number");
*/

// prob # 4
/*
const means = (a, b, c, d) => {
    return(a+ b+ c+ d) / 4
} 
console.log(means(4, 5, 6, 8))
*/

////////////////////// Tamplete Literals
/*
let boy1 = "Rayyan"
let boy2 = "Yamaan"
let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence)
*/

////////////////////// Escape Squence
// \n use in a next line
// \' escape sequence ek character hota hai ye alag alag count nh hota
/*
let fruit = 'Bana\'na'
console.log(fruit)
*/

////////////////////// String Method
// let name = "Yamaan"
// console.log(name.length)  string ki length maloom krne ke liye
// console.log(name.toUpperCase()) all character in capital
// console.log(name.toLowerCase()) all character in small
// console.log(name.slice(2, 4)) 2 se le kr 4 tk ke char show
// console.log(name.slice(2)) 2 se le kr string ke end tk show

// let friend = "Ali"
// console.log(name.contact(" friend is a ", friend))

// let friend2 = "          Hamza           "
// console.log(friend2.trim()); trim string se space khtam kr deta hai 

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools"); 
// console.log(newText) replace string me se ek word ko hata ke dosra word lga skta hai is method ko use krke

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools"); 
// console.log(newText) replace string me se ek word ko hata ke dosra word lga skta hai is method ko use krke


// Ch# 04 Practice Set Tut # 15
// Prob # 01
// let str = "Yam\""
// console.log(str.length)

//  Prob # 02
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'fox';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"

//  Prob # 03
// let name = "hamza"
// console.log(name.toUpperCase())

// Prob # 04
// let str = "Please give Rs 1000"
// let amount = Number.parseInt(str.slice(15))
// console.log(typeof amount)

// Prob # 05
// let city = "karabhi"
// let city2 = city.replace("b", "c")
// console.log(city2)


////////////////////// ARRAY
/*
let marks = [91, 92, 93, 94, 95, 96]
for(i = 0; mark.length; i++){
    console.log(marks)
}
*/
///////////////// Array Method 
/*
let num = [05, 15, 25, 35, 45,]
// let b = num.pop()  pop array ke last se ek value nikal deta hai
// let b = num.push(55) push array ke last me ek value add kr deta hai
// let b = num.shift() shift array ke start se ek value nikal deta hai
// let b = num.unshift(00) unshift array ke start se ek value add deta hai  
let b = num.toString()
console.log(b)
*/

/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
delete num
console.log(num)
*/

//////// CONCACT METHOD
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let c = a.concat(b)
console.log(c)
*/
////////////// Sort Function
// Sort Function value ko check krta hai or set krta hai alphabatic wise jese start hoga ye array 1 se phr 2 se start hone wale phr 3 se
/*
let num = [55, 85, 92, 20, 22, 25, 2, 10, 15, 11, 65,]
num.sort()
console.log(num)
*/

/*
let compare = (a, b) =>{
 return a - b
}
let num = [55, 85, 92, 20, 22, 25, 2, 10, 15, 11, 65,]
num.sort(compare) Compare value ko set krta hai assinding order ke hisaab se
console.log(num)
*/

///////// Splice And slice
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = a.splice(2, 2, 1024, 1025, 1026)
console.log(a)
*/

/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = a.slice(2, 5)
console.log(b)
*/

// let num = [3, 5, 1, 2, 4]

// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }

//////// forEach Loop 
/*
num.forEach((element) => {
    console.log(element * element)
})
*/

//////// Array.from
/*                Array.from use to convert a html text string or others in array..
let name = "Yamaan"
let arr = Array.from(name)
console.log(arr)
*/

////// for.. of loop 
/*
let num = [3, 5, 1, 2, 4]
for (let i of num){
    console.log(i)
}
*/

////// for.. in loop 
/*
let num = [3, 5, 1, 2, 4]
for (let i in num){
    console.log(i)
}
*/

///// Array for map Method 
/*
let arr = [45, 25, 35]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a)
*/

///// Array for filter Method
/*
let arr = [45, 25, 35, 0, 4, 5, 6, 18]
let a = arr.filter((a) =>{
    return a < 10
})
console.log(a)
*/

////// Array for reduce Method 
/*    
let arr = [1, 2, 3, 4, 5, 6]
let a = arr.reduce((h1, h2) =>{
    return h1 + h2
})
console.log(a)
*/

//// Chapter 5 Practice Set 
/////  Tut 2 
// Problem 1
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8]
let val = prompt("Enter a number")
val = Number.parseInt(val)
num.push(val)
console.log(num)
*/

//  Problem 2  not working
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8]
let val;
do{
    val = prompt("Enter a number")
    val = Number.parseInt(val)
    num.push(val)
    // console.log(num)
}while(a != 0);
console.log(num)
*/

//  Problem 3
/*
let num = [1, 2, 3, 4, 5, 6, 7, 81, 10, 90, 80,]
let a =  num.filter((x) =>{
    return x % 10 == 0
})
console.log(a)
*/

//  Problem 4
/*
let num = [1, 2, 3, 4, 5, 6, 7, 81, 10, 90, 80,]
let a =  num.map((x) =>{
    return x * x
})
console.log(a)
*/

//  Problem 5
/*
let num = [1, 2, 3, 4, 5,]
let a =  num.reduce((x1, x2) =>{
    return x1 * x2
})
console.log(a)
*/
/*   Ex # 01 wrong
let a = Math.random() * 100;
a = Number.parseInt(a)
let inp;
let score = 100;

while(inp != a){
    score = score - 1;
    inp = prompt("enter a Number")
    if (inp == a){
        console.log("Congratulation Your Number is right")
        console.log(`you guess the actual number in ${100 - score} change.`)
    }
    else if (inp > a && inp < 100){
        console.log("Your Number is greater then the actual number")
    }
    else if (inp < a && inp > 0){
        console.log("Your Number is greater then the actual number")
    }
    else{
        console.log("Enter a number between 1 to 100")
    }
}
*/
/*  this code is correct
let a = Math.floor(Math.random() * 100) + 1;
let inp;
let score = 100;

while (inp != a) {
  score--;
  inp = parseInt(prompt("Enter a number between 1 and 100:"));
  if (inp === a) {
    console.log("Congratulations! You've guessed the right number.");
    console.log(`You took ${100 - score} attempts.`);
    break;
  } else if (inp > 100 || inp < 1) {
    console.log("Please enter a number between 1 and 100.");
  } else if (inp > a) {
    console.log("Your number is too high.");
  } else if (inp < a) {
    console.log("Your number is too low.");
  }
}
*/

//////// prompt 
/*
let a = prompt("Enter a Number")
document.write(a)
*/
/*
let write = confirm("Please Allow me the write on this page")
*/

///// Chapter 6 Practice set 
///// tut # 29
// Problem # 1, 2, 3
/*
let inp = prompt("Enter Your Age");
inp = parseInt(inp);
let runAgain = true
const canDrive = (age) => {
  return age >= 18 ? true : false;
};

while(runAgain){
    let inp = prompt("Enter Your Age");
    inp = parseInt(inp);
    if(inp < 0){
        console.error("Enter a Valid age")
        break;
    }
if (canDrive(inp)) {
  alert("You are above 18, so you can drive a car.");
} else {
  alert("You are under 18, so you cannot drive a car.");
}
runAgain = confirm("Do you want see again this prompt")
}
*/

//// problem 4 
/*
let number = prompt("Enter a Number")
number = Number.parseInt(number)
if (number > 4){
    location.href = "https://google.com"
}
*/

///// problem 5 
/*
let colour = prompt("Enter a Background Colour")
document.body.style.background = colour
*/


// Ex # 02 Solution 
/*
let computerChoice = Math.random();
if (computerChoice < 0.34){
    computerChoice = "S"
}
else if(computerChoice <= 0.64){
    computerChoice = "W"
}
else{
    computerChoice = "G"
}

let userChoice = prompt("Enter a S, W or G")
if(userChoice === computerChoice){
    alert("You Win")
}
else if(userChoice === "S"){
    if(computerChoice === "W"){
        alert("The result is a tie!")
        }
    else{
        alert("Computer Chose a G")
    }    
}
else if(userChoice === "W"){
    if(computerChoice === "G"){
        alert("The result is a tie!")
        }
    else{
        alert("Computer Chose a G")
    }    
}
else if(userChoice === "G"){
    if(computerChoice === "S"){
        alert("The result is a tie!")
        }
    else{
        alert("Computer Chose a G")
    }    
}
else{
    alert("Please Enter a Valid S, W or G")
}
*/

//Chapter # 07 PS
// Video 38
// Question 1
/*
document.getElementById("Home").style.color = "red"
*/

// Question 3
/*
document.getElementById("Home").style.color = "green"
document.getElementById("Contact").style.color = "green"
*/

// Question 4
/*
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
})
*/


//////// inner Html
/*
video # 41 all content
*/


//////// HTML Attribute 
/* 
video # 42 all content
*/

// let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';
/*
let div = document.createElement('div')
div.innerHTML = '<h1>Hello World</h1>'
*/
// a.appendChild(div)
// a.append(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)

/*
first.insertAdjacentHTML('beforebegin','<div class = test >Beforebegin</div>')
first.insertAdjacentHTML('afterbegin','<div class = test >Afterbegin</div>')
first.insertAdjacentHTML('afterend','<div class = test >Afterend</div>')
first.insertAdjacentHTML('beforeend','<div class = test >Beforeend</div>')
*/
// first.remove()

////// Set Timeout 
/*
let a = setTimeout(function(){
    alert("Hello world")    
}, 5000)


let b = prompt("Do you want to see a Timeout")
if("n" == b){
    clearTimeout(a)
}
console.log(a)
*/

////// chapter 8 PS Video 49
/*
document.getElementById("google").addEventListener("click", function(){
    window.location = "https://google.com"
})
*/

/*
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
}, 100)
*/


///////// Ex # 03  
// Solution
/*
let array = {
    "error": false,
    "amount": 9,
    "jokes": [
        {
            "category": "Programming",
            "type": "single",
            "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 0,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 2,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 3,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 4,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 5,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 9,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 12,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 18,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"We messed up the keming again guys.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 20,
            "safe": true,
            "lang": "en"
        }
    ]
    , 
    "error": false,
    "amount": 9,
    "jokes": [
        {
            "category": "Programming",
            "type": "single",
            "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 0,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 2,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 3,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 4,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 5,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 9,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 12,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 18,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"We messed up the keming again guys.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 20,
            "safe": true,
            "lang": "en"
        }
    ]
}


// Get the jokes array from the DOM
let jokes = document.getElementById("jokes").value.split("\n");

// Generate a random index between 0 and the length of the jokes array
let index = Math.floor(Math.random() * jokes.length);

// Get the joke at the random index
let joke = jokes[index];
*/

///////////////////////////////////////////////// Syncronous Program
/*
let a = prompt("What is Your Name") 
let b = prompt("What is Your Age") 
let c = prompt("What is Your Favourite Colour") 
console.log(a + " is " + b + " Years Old and has " + c + " is Favourite Colour ")
*/

//////////////////////////////////////////////// Asyncronous Program
/*
console.log("Start")
setTimeout(function ()  {
    console.log("Hi I am Good")
}, 2000);
console.log("End")
*/

//////////////////////////////////////////////// CallBacks 
/*
function loadScript(src, CallBacks){
    var script = document.createElement("script")
    script.src = src
    script.onload = function(){
        console.log("Script Loaded with SRC" + src)
        CallBacks()
    }
    document.body.appendChild(script)
}
function hello(){
    alert("hello world")
}
function (){
    alert("hello world")
}
loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js", hello) 
// crossorigin="anonymous
*/

////////////////////////////////////////// Ex # 4 Clock 
/*
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    const time = `${hours}:${minutes}:${seconds}`;
  
    document.querySelector("#clock").textContent = time;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  */


/////////////////////////////// Promises    
/*
let promise = new Promise((resolve, reject) => {
    alert("Hello")
    resolve(52)
})

console.log("Helo One")
setTimeout(function()  {
    console.log("Helo Two In 2 second")
}, 2000);
console.log("Helo Three")
console.log(promise)
*/

// Fetch Google.com homepage (alert/console.log("google.com homepage done"))
// Fetch data from data api
// Fetch picture from the server
// Print Downloading
// Rest of the script


////////////////////////////////////////////// .then(), .catch() in Promise 
/*
let p1 = new Promise((resolve, reject) => {
    console.log("Promise Is pending")
    setTimeout(() => {
        console.log("I am promise and i am Resolve")
        resolve()
        // reject(new Error("I am an Error"))
    }, 5000);
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise Is pending")
    setTimeout(() => {
        console.log("I am promise and i am Reject")
        // resolve()
        reject(new Error("I am an Error"))
    }, 5000);
})
// console.log(p1, p2)
// To Get the Errors
p1.then((value) =>{
    console.log(value)
})
// To Catch the Errors
// p2.catch((error) =>{
//     console.log("Some Error Occure in p2")
// })
p1.then((value) =>{
    console.log(value)
}, ((error) =>{
    console.log(error)
}))
*/

////////////////////////////////////////////// Promise Chaining .then() calls 
/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log("Promise in 2 Second") 
       resolve(50)
    }, 2000);
})
p1.then((value) =>{
     console.log(value)
     let p2 = new Promise((resolve, reject) => {
        // console.log("2nd Promise")
        setTimeout(() => {
            resolve("Promise 2")
        }, 2);
     })
     return p2
}).then((value) =>{
    console.log("We Are Done")
    return 2
}).then((value) =>{
    console.log("We Are Pakka Done")
})
*/

/*
const loadScript = (src) =>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () =>{
            resolve("We are loading this script ")
        }
        script.onerror = () =>{
            reject(0)
        }
    })
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
 console.log(value)
}).catch((erroe) => {
    console.log("We are Sorry we are some problem having loading This Script")
})
*/

// /////////////////////////////////////////// Attaching Multiple Handlers to a Promise
/*
let p1 = new Promise((resolve, reject) => {
    alert("Hey I am not Resolved")
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
p1.then(() => {
    console.log("Hurray")
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 5000);
    })
    .then((value) =>{
        console.log(value)
    })
})
p1.then(() => {
    console.log("Congrates this Promise is Now Resolve")
})
*/

// ////////////////////////////////////////////////////  The Promise API
/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 11000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2")
        reject(new Error("Error"))
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
})

// Promise.all() [agr kui ek bhi rejecte hoga to kui bhi promise nh chale ga]
// let promise_all = Promise.all([p1, p2, p3])

// Promise.allSetteled() [agr kui ek bhi rejecte hoga to phr bhi promise chale ga]
// let promise_all = Promise.allSettled([p1, p2, p3])

// Promise.race() [agr kui bhi PROMISE phele resolve ho jae wp wali show kr dega]
// let promise_all = Promise.race([p1, p2, p3])

// Promise.race() [agr kui bhi PROMISE phele kui bhi value reject kr dega to uske baad wali value show kr de ga]
// let promise_all = Promise.any([p1, p2, p3])

let promise_all = Promise.any([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})
*/

//////////////////////////////////////////// Async/Await 
/*
async function Weather(){
    let Karachi_Weather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Degree")
        }, 2000);
    })
    let Lahore_Weather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Degree")
        }, 5000);
    })

    // Karachi_Weather.then(alert)
    // Lahore_Weather.then(alert)

    console.log("Fetching Karachi Weather Please Wait...")    
    let KarachiW = await Karachi_Weather
    console.log("Fetched Karachi Weather: " + KarachiW)    
    console.log("Fetching Lahore Weather Please Wait...")    
    let LahoreW = await Lahore_Weather
    console.log("Fetched Lahore Weather: " + LahoreW)    
    return [KarachiW, LahoreW]
}
const Weather_2 = async () =>{
    console.log("This is a Second weather and this weather is not be Wait...")
}
const main1 = async () =>{
    console.log("Welcome to Weather Control Room")
    let a = await Weather()
    let b = await Weather_2()
    // a.then((value) =>{
//     console.log(value)
// })
}
main1()
// console.log(a,b)
// console.log(b)
*/


/////////////////////////  Error Handling: try and catch 
/*
setTimeout(() => {
    console.log("Hacking Wifi..... Please Wait.")
}, 1000);
try{
    console.log(Name)
}
catch(error){
    console.log("Error")
}
setTimeout(() => {
    console.log("Fetching Username And Password..... Please Wait.")
}, 2000);
setTimeout(() => {
    console.log("Hacking Number (*92335375895)..... Please Wait.")
}, 3000);
setTimeout(() => {
    console.log("Fetched Completed!")
}, 4000);
*/

//////////////////////////////////// The Error Object & Custom Errors
/*
try{
    let age = prompt("Enter Your Age")
    age = Number.parseInt(age)
    if(age > 100){
        throw new ReferenceError("This is Probaly not True")

    }
    // console.log(Harry)
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log('This Script Still Running')
*/

/////////////////////////////// Finally Clause
// age try me kui error ho to phr bhi finally chale ga ya phr catch me phr bhi chale ga finally, Ya phr Dono me kui error ho to phr bhi chale ga, Or agr function me try ya catch me kui value return ho rahi ho to phr bhi finally chale ga 
/*
try{
    let a = 0
    console.log("Program Run Sucessfully");
}
catch(error){
 console.log("This is an Error")
 console.log(p)
}
finally{
    console.log("I am a Good Boy")
    // Close The File
    // Exist The Loop
    // Write to the Log File
}
*/

////////////////////////////////// Chapter 9 - Practice Set 
// Problem # 01
/*
const loadScript = async(src) =>{
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () =>{
            resolve(src + " Done Success...")
        }
        document.head.append(script)
    })
}
*/

// Problem # 01
/*
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js")
a.then((value) =>{
    console.log(value)
})
*/

// Problem # 02
/*
const main1 = async () =>{
    console.log(new Date())
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js")
    console.log(a)
    console.log(new Date())
}
main1()
*/

// Problem # 03
/*
let p = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Error("This is not Match"))
        }, 3000);
    })
}
let a = async () =>{
    try{
        let c = await p()
        console.log(c)
    }
    catch(err){
        console.log("The Error is found")
    }
}
a()
*/

// Problem # 04
/*
let p1 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(10) 
        }, 2000);
    })
}
let p2 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(20) 
        }, 1000);
    })
}
let p3 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(50) 
        }, 3000);
    })
}
const run = async () => {
    console.time("Run")
    // let a1 = await p1()   // fetch in 10 second   
    // let a2 = await p2()  // fetch in another 10 second
    // let a3 = await p3()  // fetch in yet another 10 second
    // console.log(a1, a2, a3)

     let a1 = p1()   // fetch in 10 second   
    let a2 = p2()  // fetch in another 10 second
    let a3 = p3()  // fetch in yet another 10 second
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log*(a1a2a3)
    console.timeEnd("Run")
}
run()
*/

// Exercise 5: Hackerman
/*
async function simulateHacker() {
    console.log("Initiating hack...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Accessing mainframe...");
    await new Promise(resolve => setTimeout(resolve, 5500));
    console.log("Hacking Phone...");
    await new Promise(resolve => setTimeout(resolve, 6000));
    console.log("Hacking Realme C25...");
    await new Promise(resolve => setTimeout(resolve, 7500));
    console.log("Hacking 03158894330...");
    await new Promise(resolve => setTimeout(resolve, 8000));
    console.log("Hacking Facebook (Anas Fahim)...");
    await new Promise(resolve => setTimeout(resolve, 8500));
    console.log("Hacked Facebook-Passwor **********");
    await new Promise(resolve => setTimeout(resolve, 9000));
    console.log("Hacked all Account...");
    await new Promise(resolve => setTimeout(resolve, 9500));
    console.log("Downloading data...");
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log("Upload complete!");
  }
  simulateHacker();
*/

////////////////////////////////////   Fetch API
// tut # 66

// Sending POST request with Fetch API 
/*
const createTodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
            title: 'Harry2',
            body: 'bhai2',
            userId: 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(5))
}
mainFunc()
*/

///////////////////////////  Cookies in JavaScript
/*
console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
*/


///////////////////  localStorage & related methods
/*
let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}
*/

//////////////////////////////////// sessionStorage & related methods
/*
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}
*/

//////////////////////////////////// JavaScript Chapter 10 - Practice Set
/*
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})
*/

/* 
let n = localStorage.getItem("note")
alert("Your note is " + n)

let a = prompt("Enter your note")
if (a) {
        localStorage.setItem("note", a)
}

let c = confirm("Do you want to delete your note?")
if (c) {
        localStorage.removeItem("note")
        alert("Note deleted successfully!")
}
*/

////////////////// Introduction to Object Oriented Programming
// Interview Important topic 
// Tut # 74

//////////////////////////////////////     Classes and Objects in JavaScript 
/*
class RailwayForm {
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
  }
  
  // Create a form for Harry
  let harryForm = new RailwayForm()
  // Fill the form with Harry's details
  harryForm.fill("Harry", 145316)
  
  // Create a forms for Rohan
  let rohanForm1 = new RailwayForm()
  let rohanForm2 = new RailwayForm()
  // Fill the forms with Rohan's details
  rohanForm1.fill("Rohan", 222420)
  rohanForm2.fill("Rohan", 2229211)
  
  harryForm.submit()
  rohanForm1.submit()
  rohanForm2.submit()
  rohanForm1.cancel()
  */


  //////////////////////////////////////   Constructor in JavaScript 
  /*
  class RailwayForm {
    constructor(givenname, trainno, address){
        console.log("Consttuctor Called.." + givenname + trainno)
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    preview(){
        alert(this.name + " Your Form is Train number " + this.trainno + " and Your Address is " + this.address)
    }
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
      this.trainno = 0
    }
  }
  let HarryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
  HarryForm.preview()
  HarryForm.submit()
  HarryForm.cancel()
  HarryForm.preview()
  */

//////////////////////////////////////// Inheritance & extends Keyword in JavaScript   
/*
class Animal {
    constructor(name, color) {
      this.name = name
      this.color = color
    }
    run() {
      console.log(this.name + " is running!")
    }
    shout() {
      console.log(this.name + " is barking!")
    }
  }
  
  class Monkey extends Animal {
    eatBanana() {
      console.log(this.name + " is eating banana")
    }
    hide() {
      console.log(`${this.name} is hiding`)
    }
  }
  
  let ani = new Animal("Bruno", "white")
  let m = new Monkey("Chimpu", "orange")
  
  ani.shout()
  m.eatBanana()
  m.hide()
  // ani.hide() //This will throw an error
*/

////////////////////// constructor & Super Keyword
/*
class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
    }
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      console.log(`This is a newly written constructor`)
    }
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      super.requestLeaves(4)
      console.log("One extra is granted")
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  
    }
  }
  
  let e = new Programmer("Harry")
  e.login()
  e.requestLeaves(3)
  */

/////////////////////// Static Method in JavaScript   
// Again Video Watch
/*
class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      alert("Animal " + this.name + " is walking")
    }
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  // console.log(j.capitalize("thisa")) // --- > this doesnt work
  */

/////////////////////////// getters, setters & instanceOf Operato
/*
class Animal {
    constructor(name){
        this._name = name
    }
    fly(){
        console.log("Mai Ur Raha hon")
    }
    get name (){
        return this._name
    }
    set name (newName){
        this._name = newName
    }
}   
class Rabbit extends Animal {
     eatCarrot(){
        console.log("Eating Carrot")
     }
}
let a = new Animal("Tiger")
a.fly()
console.log(a.name)
a.name = "Fish"
console.log(a.name)
c = 50
let b = new Rabbit()
b.eatCarrot()

console.log(a instanceof Animal)
console.log(c instanceof Animal)
console.log(b instanceof Animal)
*/

/////////////////////////////////  JavaScript Chapter 11 Practice Set
// class Complex {
//     constructor(real, imaginary) {
//       this.real = real
//       this.imaginary = imaginary
//     }
//     add(num) {
//       this.real = this.real + num.real
//       this.imaginary = this.imaginary + num.imaginary
  
//     }
  
//     get real() {
//       return this._real
//     }
  
//     get imaginary() {
//       return this._imaginary
//     }
  
//     set imaginary(newImaginary) {
//       this._imaginary = newImaginary
//     }
  
//     set real(newReal) {
//       this._real = newReal
//     }
//   }
  /*
  let a = new Complex(2, 4)
  console.log(a.real, a.imaginary)
  a.real = 10
  a.imaginary = 10
  let b = new Complex(6, 2)
  a.add(b)
  console.log(`${a.real}+${a.imaginary}i`)
  
  class Human {
    constructor(name, favfood) {
      this.name = name
      this.favfood = favfood
    }
    walk() {
      console.log(this.name + "Human is walking")
    }
  }
  
  class Student extends Human {
    walk() {
      console.log(this.name + ": Student is walking")
    }
  }
  
  let o = new Student("Harry", "Bhindi")
  o.walk()
  
  console.log(o instanceof Human)
*/

////////////////////////////////// IIFE - Immediately Invoked Function Expressions    
// IIFE async await me help krta hai call krne me
/*
let a = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50)
        }, 2000);
    })
}

(async () =>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()
*/


//////////////////////////////////////////// Destructuring assignment and Spread Operator  
// Destructuring
/*
let arr = [1, 2, 3, 4, 5, 6,]

// No Need to do this
// let a = arr[0]
// let b = arr[1]

// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)

// let [a, , , d, ...rest] = arr
// console.log(a, d, rest)

// let { a, b} = {a: 2, b:5}
// console.log(a,b)

// Spread Operator
let arr1 = [3, 5, 8]
let obj1 ={...arr1}
console.log(obj1)

function sum (v1, v2, v3){
    return v1 + v2 + v3  
}
console.log(sum(...arr1))

let obj2 = {
    name: "Yamaan",
    company: "XYZ",
    address: "ABC"
}
console.log({...obj2, name: "Ali",} )
*/


/////////////////////////////////////////// Closures in JavaScript (Imp for Interview) 
// Eg # 1 (imp for interview)
/*
function init() {
    var name = "Rayyan"
    function displayName (){
        console.log(name)
    }
    name = "Ali"
    name = "Abdullah"
    return displayName
}
let c = init()
c()
*/

// Eg # 2 (imp for interview)
/*
function returnFunc(){
const x = () =>{
    let a = 1
    console.log(a)
  const y = () =>{
    // let a = 2
    console.log(a)
    const z= () =>{
        // let a = 3
        console.log(a)
    }
    
    z()
  }
  a = 999
  y()
}
 x()
}

let c = returnFunc
c()
*/

/*
const x = {
    name: "Yamaan",
    role: "JS Developer",
    exp: 10,
    show: function(){
        let that = this
        console.log(that)
        setTimeout(() => {
            console.log(`The name is ${this.name}\n The role is ${this.role}`)
        }, 2000);
    }
}
// console.log(e.name)
x.show()
*/

/////////////////////////////////// JavaScript Chapter 12 - Practice Set 
// Question 1
// let a = (text) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, 2000);
//     })
// }
// (
//     async () =>{
//       let text = await a('Hello')
//       console.log(text)
//       text = await a('World')
//       console.log(text)
//     }
// )()


// Question 2
// const sum = (a, b, c) =>{
//     return a + b + c
// }
// let x = [1, 2, 3]
// console.log(sum(...x))

// Question 4
// function simpleInterest(p, r, t) {
//     return (p * r * t) / 100;
//   }
  
//   console.log(simpleInterest(100, 5, 1))
