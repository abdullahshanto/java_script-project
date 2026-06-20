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





function bank() {
  let balance = 1000;

  return function () {
    balance -= 100;
    console.log("Balance:", balance);
  };
}

const withdraw = bank();
withdraw();