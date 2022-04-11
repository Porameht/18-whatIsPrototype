(() => {
  // 1. Class vs Prototype
  class Person {}
  const frank = new Person();
  console.log(frank);

  // 2. what's prototype?
  const name = "Porameht";
  console.log(name.__proto__);

  const arr = [];
  console.log(arr.__proto__);
  // 3. Prototype Chain
  const name1 = "Khumsombat";
  console.log(name1.toString);
  console.log(name1.__proto__);
  console.log(name1.__proto__.__proto__);

  // 4. Extend a prototype
  const name2 = "Parichad";
  function sayHello(val) {
    console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello;
  name2.sayHello("World");
  console.log(name2.__proto__);
})();
