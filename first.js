// console.log("Apna College");
// let student = {
//   name: "sanskar",
//   cgpa: 9.3,
//   rollno: 22103133,
//   semester: 4,
//   internhip: false,
// };
// for (let key in student) {
//   console.log(student[key]);
// }
// // let str = "sanskar";
// // for (let i of str) console.log(i);
// // let num = prompt("Enter no.");
// // console.log(num ** 2);
// // console.log(num * 2);
// let arr = [1, 2, 3, 4, 5];
// // arr.forEach(function add(val) {
// //   console.log(val * 2);
// // });
// arr.forEach((val, idx, arr) => {
//   console.log(val * 2, idx, arr);
// });
// let mul2 = (val, idx, arr) => {
//   console.log(val * 2, idx, arr);
// };
// arr.forEach(mul2);
// let calcSquare = (val) => {
//   return val ** 2;
// };
// newarr = arr.map(calcSquare);
// console.log(newarr);
// let newArr = arr.filter((val) => {
//   return val % 2 == 1;
// });
// console.log(newArr);
// let num = prompt("Enter the value of n");
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = i + 1;
// }
// let sum = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(sum);
// console.dir(document.body);
// let heading = document.getElementById("heading");
// console.dir(heading);
let headings = document.getElementsByClassName("heading");
console.log(headings);
console.dir(headings);
let firstEl = document.querySelector(".myId");
console.dir(firstEl);
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class", "newClass");
console.log(para.getAttribute("class"));
let div=document.querySelector("div");
console.log(div);