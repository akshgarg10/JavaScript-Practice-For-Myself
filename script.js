// console.log("hello");

// const hero = {
//     name:"Aksh",
//     age:"22",
//     gender:"Male",
// };


// let answer = prompt("poaa da");
// console.log(answer>10 ? 'Yes':'No');

// let marks = [10,20,30,40];
// let multiple_things = [10,"Aksh", 24, "Garg"];
// console.log(multiple_things);
// // console.log(multiple_things[3]);

// for(let i=0;i<multiple_things.length;i++){
//     console.log(`The ${i} element is ${multiple_things[i]}`);
// }

// task 4
// let students = [85,97,44,37,76,60];

// let number =0;

// for(let element of students){
//     number += element;
// }

// console.log(number/students.length);

//task 5
// let prices = [250,645,300,900,50];

// for(let i of prices){
//     let off = (i*10)/100;
//     i = i - off;
//     console.log(i);
// }

// prices.push(100);
// console.log(prices);
// prices.pop();
// console.log(prices)

// console.log(prices.toString());

// console.log(prices.slice(1,3));
// console.log(prices.splice(1,3,49));
// console.log(prices);

//task 6
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(`The companies listed are ${companies}`);

//a. remove the first company of the array
// 1.
// companies.shift();
// console.log(`New list is ${companies}`);
// 2.
// console.log(companies.slice(1));
// 3.
// companies.splice(0,1);
// console.log(companies);

// b. remove uber and add ola in its place
// 1.
// companies[1] = "Ola";
// console.log(`Updated list is ${companies}`);
// 2.
// companies.splice(1,1,"Ola");
// console.log(`Updated list is ${companies}`);

//c. add amazona at the end
// 1.
// companies.push("Amazon");
// console.log(`Final list is ${companies}`);
// 2.
// companies.splice(companies.length,1,"Amazon");
// console.log(`Final list is ${companies}`);



//function
// function myFunction(msg){
//     console.log("ban gaya function");
//     let object = {
//         name:"Aksh",
//         age:22,
//     };
//     console.log(object);
//     console.log(msg);
// }
// //function call
// myFunction("Susain");

//function to add two numbers
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(5,9));

// arrow function
// const myFunction = (a,b) => {
//     console.log("arrow vi working aa baabe");
//     console.log(a+b);
// }
// myFunction(10,20);

// task 
// function vowelString(str){
//     let count =0;
//     for(let i =0;i<str.length;i++){
//         if(str.charAt(i) == 'a'|| str.charAt(i) == 'e'|| str.charAt(i) == 'i'|| str.charAt(i) == 'o'|| str.charAt(i) == 'u'){
//             count++;
//         }
//     }
//     return count;
// }
// let answer = vowelString("aieoupl");
// console.log(answer);

//using arrow function
// const vowelString2 = (str2) => {
//     let count =0;
//     for(let i =0;i<str2.length;i++){
//         if(str2.charAt(i) == 'a'|| str2.charAt(i) == 'e'|| str2.charAt(i) == 'i'|| str2.charAt(i) == 'o'|| str2.charAt(i) == 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// let answer = vowelString2("ashbiuoepgdjvxkmln");
// console.log(answer);

// for each loop - high order function
// let arr = [1,2,3,4,5,"seltos","kuduku"];
// // arr.forEach(function myValue(val){
// //     console.log(val);
// // });
// arr.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// });

// task
// let arr=[1,2,3,4,5,6];
// arr.forEach((val) => {
//     console.log(val**2);
// }); 

//array map
// let arr=[1,2,3,4,5,6,7,8,9];

// let mitra = arr.map((val) => {
//     return val;
// })
// console.log(mitra);

// arr.map((val) => {
//     console.log(val);
// })

//task
// let hero = document.getElementById("task1");
// console.dir(hero);
// console.dir(hero.innerText)
// hero.innerText = hero.innerText + " from Himachal to Haryana";
// console.dir(hero.innerText);

//task
// let heroBtn = document.createElement("button");
// heroBtn.innerText = "Click me ";
// heroBtn.style.color = "white";
// heroBtn.style.backgroundColor = "red"
// console.log(heroBtn);
// console.log(heroBtn.innerText);

// document.querySelector("body").prepend(heroBtn);

//task2
// let syn = document.querySelector("p");




//events
let unq1 = document.querySelector("#unq1");

unq1.addEventListener("click", () => {
    console.log("edited");
});
unq1.addEventListener("mouseover", () => {
    console.log("edtied 2");
});

let unq2 = document.querySelector("#unq2");

//another way but
unq2.ondblclick = () => {
    console.log("Double click working")
};