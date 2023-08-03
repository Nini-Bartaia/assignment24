// Function 1
function fun1(a: number, b: number): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return 'შეცდომა მატრიცაში';
    }
  }
  
  console.log(fun1(2, 4));
  
  // Function 2
  function fun2(temp: number): number | false {
    if (typeof temp !== 'number') {
      return false;
    }
  
    const celsius = (temp - 32) / 1.8;
    return Math.round(celsius);
  }
  
  console.log(fun2(40));
  
  // Function 3
  function fun(a: number, b: number, operation: '+' | '-' | '*' | '/'): number | false {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return false;
    }
  
    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return false;
    }
  }
  
  console.log(fun(200, 2, '/'));
  