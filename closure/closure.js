// function outer() {
//   let name = "Shanto";

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const myFunc = outer();//inner function //ekhane outer sesh,name delete howar kotha but hoy cz inner function need name varialeble
// myFunc(); //shanto





function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter();

inc(); // 1
inc(); // 2
inc(); // 3