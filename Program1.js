// Arithmetic Operations using currying


function mathOperation(operation) {
    return function (x) {
      return function (y) {
        return operation(x, y);
      };
    };
  }
  
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => x / y;
  const curriedAdd = mathOperation(add);
  const curriedSubtract = mathOperation(subtract);
  const curriedMultiply = mathOperation(multiply);
  const curriedDivide = mathOperation(divide);
  
  const result = curriedDivide(200)(curriedSubtract(100)(curriedAdd(20)(30)));
  console.log("Answer:", result); 
  