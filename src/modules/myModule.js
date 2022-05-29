export const myModule = () => {

  function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }

  console.log(factorial(4));

  function counter() {
    let count = 0;

    return function () {
      return count++;
    }
  }

  window.counter = counter;
}