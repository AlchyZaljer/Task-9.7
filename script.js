let lastOperand = 0;
let cuttingLength = 0;
let secondOperand = 0;
let result = 0;
let fixedFlag = 0;
let fixedExtraFlag = 0;
let resultCalculationFlag = 0;
let operation = null;
let operand = null;
let history = '';
const inputWindow = document.getElementById('inputWindow');

document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});

document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
});

document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
});

document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
});

document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});

document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});

document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});

document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});

document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});

document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});

document.querySelector('#btn_dot').addEventListener('click', function () {
    inputWindow.value += '.';
    fixedFlag = 1;
});

document.querySelector('#btn_delete').addEventListener('click', function () {
    lastOperand = 0;
    result = 0;
    fixedFlag = 0;
    fixedExtraFlag = 0;
    operation = null;
    history = '';
    inputWindow.value = '';
});

document.querySelector('#btn_clear').addEventListener('click', function () {
    const repository = inputWindow.value;
    inputWindow.value = repository.slice(0, repository.toString().length - 1);
});

document.querySelector('#btn_inverse').addEventListener('click', function () {
    operand = inputWindow.value.slice(history.toString().length);
    if (operand === '') {
        lastOperand = parseFloat(result);
        resultCalculationFlag = 1;
    } else {
        lastOperand = parseFloat(operand);
        fixedExtraFlag = 0;
    };
    inputWindow.value = history + '-(' + lastOperand + ')';
    result = -lastOperand;
    if (Number.isInteger(result) === false) {
        result = result.toFixed(5);
        fixedExtraFlag = 1;
    };
    lastOperand = 0;
    fixedFlag = 0;
    resultCalculationFlag = 0;
    operation = null;
    inputWindow.value += '=' + result + '\n';
    history = inputWindow.value;
    inputWindow.scrollTop = inputWindow.scrollHeight;
});

document.querySelector('#btn_sqrt').addEventListener('click', function () {
    operand = inputWindow.value.slice(history.toString().length);
    if (operand === '') {
        lastOperand = parseFloat(result);
        resultCalculationFlag = 1;
    } else {
        lastOperand = parseFloat(operand);
        fixedExtraFlag = 0;
    };
    inputWindow.value = history + '\u221A' + lastOperand;
    result = Math.sqrt(lastOperand);
    if (Number.isInteger(result) === false) {
        result = result.toFixed(5);
        fixedExtraFlag = 1;
    };
    lastOperand = 0;
    fixedFlag = 0;
    resultCalculationFlag = 0;
    operation = null;
    inputWindow.value += '=' + result + '\n';
    history = inputWindow.value;
    inputWindow.scrollTop = inputWindow.scrollHeight;
});

document.querySelector('#btn_div').addEventListener('click', function () {
    operand = inputWindow.value.slice(history.toString().length);
    if (operand === '') {
        lastOperand = parseFloat(result);
        resultCalculationFlag = 1;
    } else {
        lastOperand = parseFloat(operand);
        fixedExtraFlag = 0;
    };
    operation = 'div';
    inputWindow.value += '\u00F7';
});

document.querySelector('#btn_mul').addEventListener('click', function () {
    operand = inputWindow.value.slice(history.toString().length);
    if (operand === '') {
        lastOperand = parseFloat(result);
        resultCalculationFlag = 1;
    } else {
        lastOperand = parseFloat(operand);
        fixedExtraFlag = 0;
    };
    operation = 'mul';
    inputWindow.value += '\u00D7';
});

document.querySelector('#btn_sub').addEventListener('click', function () {
    operand = inputWindow.value.slice(history.toString().length);
    if (operand === '') {
        lastOperand = parseFloat(result);
        resultCalculationFlag = 1;
    } else {
        lastOperand = parseFloat(operand);
        fixedExtraFlag = 0;
    };
    operation = 'sub';
    inputWindow.value += '-';
});

document.querySelector('#btn_add').addEventListener('click', function () {
    operand = inputWindow.value.slice(history.toString().length);
    if (operand === '') {
        lastOperand = parseFloat(result);
        resultCalculationFlag = 1;
    } else {
        lastOperand = parseFloat(operand);         
        fixedExtraFlag = 0;
    };
    operation = 'add';
    inputWindow.value += '+';
});

document.querySelector('#btn_equal').addEventListener('click', function () {
    if (resultCalculationFlag === 1) {
        cuttingLength = history.toString().length + 1;
        secondOperand = parseFloat(inputWindow.value.slice(cuttingLength));
    } else {
        cuttingLength = history.toString().length + lastOperand.toString().length + 1;
        secondOperand = parseFloat(inputWindow.value.slice(cuttingLength));
    };
    if (operation === null) {
            cuttingLength = history.toString().length;
            secondOperand = parseFloat(inputWindow.value.slice(cuttingLength));
            if (fixedFlag === 1 || fixedExtraFlag === 1) {
                result = secondOperand;
                if (Number.isInteger(result) === false) {
                    result = result.toFixed(5);
                    fixedFlag = 1;
                };
            } else {result = (secondOperand).toFixed();}
    };
    if (operation === 'add') {
        if (fixedFlag === 1 || fixedExtraFlag === 1) {
            result = lastOperand + secondOperand;
            if (Number.isInteger(result) === false) {
                result = result.toFixed(5);
                fixedFlag = 1;
            };
        } else {
            result = (lastOperand + secondOperand).toFixed();
    }};
    if (operation === 'sub') {
        if (fixedFlag === 1 || fixedExtraFlag === 1) {
            result = lastOperand - secondOperand;
            if (Number.isInteger(result) === false) {
                result = result.toFixed(5);
                fixedFlag = 1;
            };
        } else {
            result = (lastOperand - secondOperand).toFixed();
    }};
    if (operation === 'mul') {
        if (fixedFlag === 1 || fixedExtraFlag === 1) {
            result = lastOperand * secondOperand;
            if (Number.isInteger(result) === false) {
                result = result.toFixed(5);
                fixedFlag = 1;
            };
        } else {
            result = (lastOperand * secondOperand).toFixed();
    }};
    if (operation === 'div') {
        result = lastOperand / secondOperand;
        if (Number.isInteger(result) === false) {
            result = result.toFixed(5);
            fixedFlag = 1; }
    };
    if (fixedExtraFlag === 0) {
        fixedExtraFlag = fixedFlag
    };
    fixedFlag = 0;
    resultCalculationFlag = 0;
    inputWindow.value += '=' + result + '\n';
    operation = null;
    lastOperand = 0;
    secondOperand = 0;
    cuttingLength = 0;
    history = inputWindow.value;
    inputWindow.scrollTop = inputWindow.scrollHeight;
});