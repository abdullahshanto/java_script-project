function outer() {
  let name = "Shanto";

  function inner() {
    console.log(name);
  }

  return inner;
}

const myFunc = outer();
myFunc(); //shanto
