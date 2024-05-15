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