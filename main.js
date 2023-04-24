
//console.log('Hello World');



// go to MDN

//console.error('This is an error');

//console.warn('This is a warning');


// Variables
//var, let, const
// let, const es2015 ECMAScript

let age = 29;
age = 30;

console.log(age);

// use const unless you wanna reassign the value
// use let if you are sure you wont make changes


let score;

score = 10;

console.log(score);


// DstaTypes
//Primitive DTypes
// string, numbers, bool, null, undefined, symbol

const realName = 'Abigirl';
const height = 163;
const rating = 45;
const isCool  = true;
const x = null;
const y = undefined;
let z;

//no floats in jv

console.log(typeof height);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof realName);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);



//Strings

//Concatenation
console.log('My name is ' + realName + ' and I am ' + age);

// Template String
console.log(`My name is  ${realName} and I am ${age}`);

//or

const hello =`My name is  ${realName} and I am ${age}`
console.log(hello);

//Strings and properties

const s = 'Hello World!';
console.log(s.length);

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));


const r = ' technology, computers, it, code';

console.log(r.split(', '));


//Arrays

// variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);

//Typescript

//accessing fruits

console.log(fruits[1]);

//add
fruits[5]= 'grapes';
console.log(fruits);

// adding an element at the end
fruits.push('mangos');
console.log(fruits);

// adding an element from the beginning
fruits.unshift('strawberries');
console.log(fruits);

//to remove an element
fruits.pop('mangos');
console.log(fruits)

// true/ false
console.log(Array.isArray('hello'));

//to get index
console.log(fruits.indexOf('oranges'));



// Object Literals

// are just key value pairs

//Example of a person

const person = {
    firstName: 'Abigirl',
    lastname :  'Muchineripi',
    age: 30,
    hobbies:['coding', 'reading', 'gym'],
    address: { 
        street: 'No 5 Second St',
        city: 'Harare',
        state: 'HR'


    }
}

console.log(person);

// accessing single value, use the dot syntax

console.log(person.firstName, person.lastname);

// accessing single elements using index
console.log(person.hobbies[1]);

console.log(person.address.city);


//Destructuring

// Pulling out objects
const {firstName, lastname, address:{city}} = person; // new feature
console.log(firstName);
console.log(city);

//Adding Properties
person.email = 'abigirl@gmail.com';
console.log(person);


//Arrays of Objects
const todos = [
    {
        id: 1,
        text: 'Working Out',
        isCompleted: true

    },
    {
        id: 2,
        text: 'Building blocks',
        isCompleted: true
        
    },
    {
        id: 3,
        text: 'Coding',
        isCompleted: false
    }
]
    

console.log(todos);  
console.log(todos[1].text);
//use json data format
//go to www.freeformatter.com
//paste it in json formatter and see changes

/*
 [
    {
        id: 1,
        text: 'Working Out',
        isCompleted: true

    },
    {
        id: 2,
        text: 'Building blocks',
        isCompleted: true
        
    },
    {
        id: 3,
        text: 'Coding',
        isCompleted: false
    }
]

maybe we wanna send it to tthe server

*/

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // the output is how we send data to the server double quoted


//Loops

//For loops

for(let i = 0; i<10; i++){ //first part = iterater, 2nd part= condition to be met, i++ is the increment of +1//
  console.log(i);
  console.log(`For Loop Number: ${i}`); //use template string quotes`//

}


// While Loops

let i = 0;
while(i< 10) {
    console.log(i);
    console.log(`While Loop Number: ${i}`);
    i++;

}


//Looping Through Arrays

//using For loop

//NB : is not the best way of looping arrays

for (let i = 0; i<= todos.length; i++) {

//   console.log(todos[i].text);
}

// another method  of looping through  arrays
// For of a loop

for(let todo of todos){
    console.log(todo.id);

}

// High order array methods

//ForEach, map, filter

//1. ForEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

//2. Map
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);


//3. Filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);


//CONDITIONALS

const c = 6;   // value 4 was changed to 6 for eg3
const d = 11; // value 10 has been changed to 11 for eg2

if(c===10) {
    console.log('c is 10');

} else if(c>10){
    console.log('x is greater than 10');

}else {
    console.log('c is less than  10');
}


//eg2


if(c > 5 || d > 10) {
    console.log('x is more than 5 or d is more than 10')

}


//eg3
if(c > 5 && d > 10) {
    console.log('x is more than 5 or d is more than 10')

}

//NESTING

if(c > 5) {
    if(d > 10) {

    }
}

// A ternary operator

const w = 10; // you can change value to  9

const color = w > 10 ? 'red' : 'blue'; // ?=then, :=else ,use switch by changing color to green to get color is not red /blue

console.log(color);


//switches to evaluate

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;    

}

//FUNCTIONS

function addNums(num1, num2){
    console.log(num1 + num2);

}

addNums(5,4);

//addnums(); gives NaN ie Not a Number
/* if we pass default nums eg  function addNums(num1=1, num2=1){
    console.log(num1 + num2);
}
addNums(5,5); we get 10 cause the default is overwritten
*/

/* function addNums(num1=1, num2=1){
    return num1 + num2;
}

console.log(addNums(5,5));
*/

const addPigs = (num1 = 1, num2 =1) => {
    return num1 + num2;

}

console.log(addPigs(5,5));

//or
const addLegs = (num1=1, num2=1) => console.log(num1 + num2);

addLegs(5,5);

//or
const addEyes = num1 => num1 + 5;

console.log(addEyes(5));

todos.forEach((todo) => console.log(todo));


//OBJECT ORIENTED PROGRAMMING*/

//ES5 which has constructor function and  prototype and ES6 are the same that's why es5 is commented out

//eS5
//constructor function


/*function Child(name, surname ,  dob){
    //Set object properties
    //Set to actual date object using date constructor
    this.name = name;
    this.surname = surname;
    this.dob =  new Date(dob);*/

    // Below are 2 methods jus the same as those in prototype

   /*this.getBirthYear = function() {
        return this.dob.getFullYear();
    }*/
    /*this.getFullName = function(){
        return`${this.name} ${this.surname}`; //make use of template literal
    }
}  
 
    */    


//ProtoType
//use proto just as console.log to getfuullyear or name etc like 2 methods above

/*Child.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Child.prototype.getFullName = function(){
    return`${this.name} ${this.surname}`;

}*/

//Class

class Child{
    constructor(name, surname ,  dob){
    this.name = name;
    this.surname = surname;
    this.dob =  new Date(dob);

    }
    getBirthYear (){
        return this.dob.getFullYear();
    }
    
    getFullName (){
        return`${this.name} ${this.surname}`;

    }


}

//Instantiate object
const child1 = new Child('Abigirl', 'Muchinexy', '1993-06-19');
const child2 = new Child('Abi', 'Muc', '1994-06-19');


console.log(child1.surname);
console.log(child2.dob);

//date Methods

console.log(child2.dob.getFullYear());  

console.log(child1.getBirthYear());
    
console.log(child1.getFullName());

//results from protoype function

console.log(child2.getFullName());
console.log(child1);

       
//eS6 or eS2015 does the same but in a more pretty way
//create a class above


/*
// Built in constructors
const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'*/




// WINDOW OBJECT
// is the parent object of the browser

console.log(window);
//window.alert(1);
alert(1);

//Selecting items using Dom

//Single Element
console.log(document.getElementById('my-form'));
// or
// const form = document.getElementById('my-form');
// console.log(form);
// or
//console.log(document.querySelector('my-form'));
//we can select containers, html tags etc using querySelector
//console.log(document.querySelector('.container));


//Multiple Element
console.log(document.querySelectorAll('.item'));
//or
console.log(document.getElementsByClassName('item'));  //for classes 
   //or
console.log(document.getElementsByTagName('li')); 

const items = document.querySelectorAll('.item');
items.forEach((item)=> console.log(item));


const ul =document.querySelector('.items');
//to remove items
//ul.remove();

//removethe lastitem
//ul.lastElementChild.remove();

//edit content
/*ul.lastElementChild.textContent ='Hello';
ul.children[1].innerText = 'Abigirl';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';*/

//Adding some style on submit button
//const btn = document.querySelector('.btn');
//btn.style.background ='red';

/*const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => { //mouseout change from mouseover which was changed from click
    e.preventDefault(); //to stop the flash default behavior
   // console.log('click'); // cause the flash behaior  when clicking
   /* console.log(e.target.className);
    document.querySelector('#my-form').style.background ='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';*/

//});*/

//Comment out items in style.css file
//grab stuff from dom

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg  = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value);

    if(nameInput.value === '' ||  emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(),3000);
    }  else  {
       console.log('success');

       //add an item in list
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

       userList.appendChild(li);

       //Clear fields
       nameInput.value ='';
       emailInput.value = '';
       
    }  

}









