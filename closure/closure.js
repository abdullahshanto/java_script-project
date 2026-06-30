// function outer() {
//   let name = "Shanto";

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const myFunc = outer();//inner function //ekhane outer sesh,name delete howar kotha but hoy cz inner function need name varialeble
// myFunc(); //shanto





// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const inc = counter();

// inc(); // 1
// inc(); // 2
// inc(); // 3





// function login(username, password) {
//   let user = username;
//   let pass = password;

//   return function () {
//     console.log("Logged in as:", user);
//   };
// }

// const user1 = login("Shanto", "1234");

// user1(); // Logged in as: Shanto





// function bank() {
//   let balance = 1000;

//   return function () {
//     balance -= 100;
//     console.log("Balance:", balance);
//   };
// }

// const withdraw = bank();
// withdraw();



// function greet(msg) {
//   return function (name) {
//     console.log(msg + ", " + name);
//   };
// }

// const sayHi = greet("Hi");
// const sayHello = greet("Hello");

// sayHi("Shanto");   // Hi, Shanto
// sayHello("Rahim"); // Hello, Rahim






// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log("Clicked:", count);
//   };
// }

// const click = createCounter();

// click(); // 1
// click(); // 2
// click(); // 3




// function once() {
//   let called = false;

//   return function () {
//     if (!called) {
//       console.log("Running first time");
//       called = true;
//     } else {
//       console.log("Already called");
//     }
//   };
// }

// const runOnce = once();

// runOnce(); // Running first time
// runOnce(); // Already called
// //to check whether the data used or not 




function cacheFunc() {
  let cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("From cache");
      return cache[num];
    } else {
      console.log("Calculating...");
      let result = num * 2;
      cache[num] = result;
      return result;
    }
  };
}
