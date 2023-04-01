function calc() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let operator = document.getElementById("operator").value;
    let result;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    switch(operator) {
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
        default:
            result = "Invalid Input";
    }

    document.getElementById("answer").value = result;
}