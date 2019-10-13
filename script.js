function printError(msg) {
    document.getElementById('msg').innerText = msg;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    if (Number.isNaN(num1)) {
        printError('Xin moi nhap so thu nhat');
        return;
    }

    const num2 = parseFloat(document.getElementById('num2').value);
    if (Number.isNaN(num2)) {
        printError('Xin moi nhap so thu hai');
        return;
    }

    const operator = document.querySelector('input[name="operator"]:checked').value;
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
            printError('Something wrong happen');
            return;
    }
    document.getElementById('result').value = result;
}

document.getElementById('submit').onclick = (e) => {
    e.preventDefault();
    calculate();
};
