document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result = 0;
    let error = null;

    if (isNaN(num1) || isNaN(num2)) {
        error = 'Please enter valid numbers.';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    error = 'Division by zero is not allowed.';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                error = 'Invalid operation plz try again.';
        }
    }

    const resultElement = document.getElementById('result');
    if (error) {
        resultElement.classList.remove('alert-secondary');
        resultElement.classList.add('alert-danger');
        resultElement.textContent = error;
    } else {
        resultElement.classList.remove('alert-danger');
        resultElement.classList.add('alert-secondary');
        resultElement.textContent = `Result: ${result}`;
    }
    resultElement.style.display = '';
});