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
// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// console.dir(headings);
// let firstEl = document.querySelector(".myId");
// console.dir(firstEl);
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// para.setAttribute("class", "newClass");
// console.log(para.getAttribute("class"));
// let div=document.querySelector("div");
// console.log(div);

//classes and objects in javascript
// const student = {
//   fullName: "sanskar dhyani",
//   marks: "93.3",
//   printMarks: function () {
//     console.log("marks=", this.marks);
//   },
// }; // direct way of creating an object
// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
//   calcTax1: function () {
//     console.log("conventional way");
//   },
// };
// employee.calcTax();
// employee.calcTax1();
// //to access functions(method and properties) of some object , make it prototype of whose inside it is to be used
// const karanArjun = {
//   salary: 50000,
// };
// karanArjun.__proto__ = employee;
// employee
// {calcTax: ƒ, calcTax1: ƒ}calcTax: ƒ calcTax()calcTax1: ƒ ()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// karanArjun
// {salary: 50000}salary: 50000[[Prototype]]: ObjectcalcTax: ƒ calcTax()calcTax1: ƒ ()[[Prototype]]: Object
// karanArjun.calcTax()
// first.js:71 tax rate is 10%

//if object and prototype have same method --> then object wins
// function hello() {
//   console.log("hello");
// }
// setTimeout(hello, 2000); //2sec

// setTimeout(() => {
//   console.log("4s");
// }, 4000);
//callback
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// calculator(1, 2, sum);
//or
// calculator(5, 4, (a, b) => {
//   console.log(a * b);
// });
//CallBack Hell
// function getData(DataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", DataId);
//     if (getNextData) getNextData();
//   }, 2000);
// }
// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3..");
//     getData(3);
//   });
// });

//PROMISES - 3 states(pending,fulfilled(resolved),rejected)
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise!");
//   // resolve(123);
//   reject("failure");
// });
//promises are not created by us but they r returned by externals apis from where we try to fetch data
// function apiReturningData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
// console.log("data", dataId);
//since data is given=>resolve promise by end
// resolve("success");
//       reject("failure");
//       if (getNextData) getNextData();
//     }, 5000);
//   });
// }
//return data in form of promises
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("failed!");
//   });
// };
// let promise1 = getPromise();
// promise1.then((res) => {
//   console.log("Promise fulfilled", res);
// });
// promise1.catch((err) => {
//   console.log("error=", err);
// });
// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// } // this work is done by APIs
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1");
// let p1 = asyncFunc();
// //if p1 fulfilled/resolved
// p1.then((res) => {
//   console.log(res);
// });
// console.log("fetching data2");
// let p2 = asyncFunc2();
// //if p2 fulfilled/resolved
// p2.then((res) => {
//   console.log(res);
// });
// //p1 and p2 resolved at same time

//Now p2 will resolve after p1
// console.log("fetching data1");
// let p1 = asyncFunc();
// //if p1 fulfilled/resolved
// p1.then((res) => {
//   // console.log(res);
//   console.log("fetching data2");
//   let p2 = asyncFunc2();
//   //if p2 fulfilled/resolved
//   p2.then((res) => {
//     // console.log(res);
//   });
// });
//other way of writing same thing -promise chaining
// console.log("fetching data1");

// //if p1 fulfilled/resolved
// asyncFunc().then((res) => {
//   // console.log(res);
//   console.log("fetching data2");
//   //if p2 fulfilled/resolved
//   asyncFunc2().then((res) => {
//     // console.log(res);
//   });
// });

//redoing callback hell with promise chain
// CallBack Hell
//callback
// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3..");
//     getData(3);
//   });
// });

function getData(DataId) {
  // setTimeout(() => {
  //   console.log("data", DataId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", DataId);
      resolve("success");
    }, 4000);
  });
}
//Promise Chain
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });
//another way of writing it better way
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
