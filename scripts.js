
// Function to append a number to the input
function appendNumber(number) {
    // If the input value is "0", replace it with the new number
    if (document.getElementById("result").value === "0") {
      document.getElementById("result").value = number;
    } else {
      // Otherwise, append the number to the existing value
      document.getElementById("result").value += number;
    }
  }
  
  // Function to append a decimal point to the input
  function appendDecimal(decimal) {
    // Check if the input value already contains a decimal point
    if (!document.getElementById("result").value.includes(".")) {
      // If not, append the decimal point to the value
      document.getElementById("result").value += decimal;
    }
  }
  
  // Function to append an operator to the input
  function appendOperator(operator) {
    const currentValue = document.getElementById("result").value;
    // Check if the current value ends with an operator using a regular expression
    const endsWithOperator = /[-+*/]$/.test(currentValue);
    // If the current value doesn't end with an operator, append the new operator
    if (!endsWithOperator) {
      document.getElementById("result").value += operator;
    }
  }
  
  // Function to toggle the sign of the number in the input
  function changeSign() {
    const input = document.getElementById("result").value;
    const currentValue = parseFloat(input);
  
    // Toggle the sign of the number
    const newValue = -currentValue;
  
    // Update the input field with the new value
    document.getElementById("result").value = newValue;
  }
  
  // Function to perform the calculation
  function calculate() {
    const input = document.getElementById("result").value;
  
    try {
      // Evaluate the input using the math.js library
      const result = math.evaluate(input);
      // Update the input field with the result
      document.getElementById("result").value = result;
    } catch (error) {
      // Handle and display any errors
      console.log(error);
      document.getElementById("result").value = "Error";
    }
  }
  
  // Function to delete the last character from the input
  function backspace() {
    const currentValue = document.getElementById("result").value;
    // Check if there are characters in the input field
    if (currentValue.length > 0) {
      // Remove the last character using the slice method
      document.getElementById("result").value = currentValue.slice(0, -1);
    }
  }
  
  // Function to clear the input field
  function clearInput() {
    document.getElementById("result").value = "0";
  }
  