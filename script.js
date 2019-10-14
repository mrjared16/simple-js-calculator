{
    // null for ''
    // true for number
    // false for NaN
    const inputState = [null, null];

    function printError(msg) {
        const alert = document.getElementById('msg');
        alert.innerText = msg;
        alert.style.display = 'block';
    }

    function clearError() {
        const alert = document.getElementById('msg');
        alert.style.display = 'none';
    }

    function printResult(value) {
        document.getElementById('result').value = value;
    }

    function clearResult() {
        document.getElementById('result').value = null;
    }

    function getInput(id) {
        const { value } = document.getElementById(id);
        if (!value) {
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
                    printError('Không thể chia cho 0');
                    return null;
                }

                result = num1 / num2;
                break;
            default:
                printError('Phép tính không hợp lệ');
                return null;
        }

        return result;
    }

    // calculate
    document.getElementById('submit').onclick = (e) => {
        e.preventDefault();

        if (inputState[0] === false || inputState[1] === false) {
            clearResult();
            return;
        }

        const num1 = getInput('num1');
        const num2 = getInput('num2');

        if (num1 === null || num2 === null) {
            printError('Chưa nhập đủ 2 số');
            clearResult();
            return;
        }

        const operator = getOperator();

        const result = calculate(num1, num2, operator);

        // if calculate unsuccesfully -> clear result
        if (result === null) {
            clearResult();
            return;
        }

        clearError();
        printResult(result);
    };

    function printInputError() {
        if (inputState[0] === false) {
            printError('Số thứ nhất không hợp lệ');
            return;
        }
        if (inputState[1] === false) {
            printError('Số thứ hai không hợp lệ');
            return;
        }
        clearError();
    }

    function checkIfInputIsANumber(e, i) {
        const { value } = e.target;
        if (value === undefined || isNaN(value)) {
            inputState[i] = false;
        } else if (value !== '') {
            inputState[i] = null;
        } else {
            inputState[i] = true;
        }
        printInputError();
    }


    // validate input when onblur
    document.getElementById('num1').onblur = (e) => checkIfInputIsANumber(e, 0);
    document.getElementById('num2').onblur = (e) => checkIfInputIsANumber(e, 1);
}
