//1.
// var age =18;
// if(age>=18){
//   var a= true;
// }
// console.log(a);//but it should not access out of the block code,it makes no sense


//2.
//but it would not works in function block code

// function hello(){
//   var username = "hello";
// }
// console.log(username);



//3.over write problem

// var username="shanto";
// var unsername="Hossain";
// console.log(username);



//4.attached to window

// var username = "shanto";
// console.log(username);//username show in window



//5. const

// const name="shanto";
// name="nigga"
// console.log(name)//cant do it bcz of const let u assign a value into a variable at once


//6.

// const age={
//   year:18
// }
// age.year=23;
// console.log(age.year)//it allow it

//uses of arrow function and why to use it
//arrow function solve "This" keyword problem



//7. let (block scope fix for var problem)
// if (true) {
//   let x = 10;
// }
// console.log(x); //  ReferenceError

// Unlike var, let is block scoped, so it cannot leak outside { }.



//8. Template Literals (string improvement)
// let name = "Shanto";
// let age = 18;

// console.log(`My name is ${name} and I am ${age} years old`);

//  Benefits:

// No string concatenation (+)
// Easier multi-line strings
// Cleaner interpolation ${ }





//9. Default Parameters
// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet(); // Hello Guest

//  If no argument is passed, default value is used.





// 10. Arrow Function (short syntax + no own this)
// const add = (a, b) => a + b;

// console.log(add(2, 3));

// Benefits:

// Short syntax
// No own this (inherits from parent scope)




// 11. Destructuring (array + object unpacking)
// Array:
// const arr = [1, 2, 3];

// const [a, b] = arr;

// console.log(a, b); // 1 2
// Object:
// const user = {
//   name: "Shanto",
//   age: 18
// };

// const { name, age } = user;

// console.log(name, age);

//  Extract values easily without repeating user.name






// 12. Spread Operator (...)
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];

// console.log(arr2);

//  Used for:

// copying arrays/objects
// merging data
// Object example:
// const obj1 = { a: 1 };
// const obj2 = { ...obj1, b: 2 };




// 13. Rest Operator (... in function)
// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4);

//  Collects all arguments into an array.





// 14. Object Property Shorthand
// let name = "Shanto";
// let age = 18;

// const user = {
//   name,
//   age
// };

//  Instead of { name: name, age: age }







// 15. Classes (OOP in JS)
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log("Hello " + this.name);
//   }
// }

// const p1 = new Person("Shanto");
// p1.greet();

//  Makes OOP style easier than prototype system.











// 16. Promises (async handling)
// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) resolve("Done");
//   else reject("Error");
// });

// promise.then(res => console.log(res))
//        .catch(err => console.log(err));

//  Solves callback hell problem.




// map:
// let arr = [1, 2, 3];

// let result = arr.map(x => x * 2);

// console.log(result);



// filter:
// let result = arr.filter(x => x > 1);


// 18. Optional Chaining (?.)
// const user = {};

// console.log(user?.address?.city);

//  Prevents error if property doesn’t exist.





// 19. Nullish Coalescing (??)
// let value = null;

// console.log(value ?? "default");

//  Only replaces null or undefined (not 0 or "")