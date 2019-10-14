function printError(msg) {
    document.getElementById('msg').innerText = msg;
}

function printResult(value) {
    document.getElementById('result').value = value;
}

function getInput(id, nullMsg, nanMsg) {
    const { value } = document.getElementById(id);
    if (!value) {
        printError(nullMsg);
        return null;
    }
    if (Number.isNaN(value)) {
        printError(nanMsg);
        return null;
    }
    return parseFloat(value);
}

function getOperator() {
    return document.querySelector('input[name="operator"]:checked').value;
}

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case 'plus':
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
                printError('Khong the chia cho 0');
                result = null;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            printError('Phep tinh khong hop le');
            break;
    }

    return result;
}

document.getElementById('submit').onclick = (e) => {
    e.preventDefault();
    const num1 = getInput('num1', 'So hang thu nhat khong duoc de trong', 'So hang thu nhat khong phai la so');
    if (num1 === null) {
        return;
    }

    const num2 = getInput('num2', 'So hang thu hai khong duoc de trong', 'So hang thu hai khong phai la so');
    if (num2 === null) {
        return;
    }

    const operator = getOperator();

    const result = calculate(num1, num2, operator);

    printResult(result);
};
