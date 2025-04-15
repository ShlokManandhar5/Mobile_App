function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
            break;
        default:
            result = "Invalid Operation";
    }

    document.getElementById("output").innerHTML = `Result: ${result}`;
}