let lastOperand = 0;
let operation = null;
let result = null;
const inputWindow = document.getElementById('inputWindow');
let history = '';
let fixedFlag = null;

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
    lastOperand = null;
    operation = null;
    history = '';
    inputWindow.value = '';
});

document.querySelector('#btn_clear').addEventListener('click', function () {
    const storage = inputWindow.value;
    console.log('start = ' + storage);
    inputWindow.value = storage.slice(0, storage.toString().length-1);
    lastOperand = null;
    operation = null;
});

document.querySelector('#btn_inverse').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value.slice(history.toString().length));
    operation = 'inverse';
    inputWindow.value = history + '-(' + lastOperand + ')';
});

document.querySelector('#btn_sqrt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value.slice(history.toString().length));
    operation = 'sqrt';
    inputWindow.value = history + '\u221A' + lastOperand;
});

document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value.slice(history.toString().length));
    operation = 'div';
    inputWindow.value += '\u00F7';
});

document.querySelector('#btn_mul').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value.slice(history.toString().length));
    operation = 'mul';
    inputWindow.value += '\u00D7';
});

document.querySelector('#btn_sub').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value.slice(history.toString().length));
    operation = 'sub';
    inputWindow.value += '-';
});

document.querySelector('#btn_add').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value.slice(history.toString().length));
    operation = 'add';
    inputWindow.value += '+';
});

document.querySelector('#btn_equal').addEventListener('click', function () {
    if (operation === 'add') {
        const cuttingLength = history.toString().length + lastOperand.toString().length + 1;
        const secondOperand = parseFloat(inputWindow.value.slice(cuttingLength));
        if (fixedFlag === 1) {
            result = (lastOperand + secondOperand).toFixed(5);
        } else {
            result = (lastOperand + secondOperand).toFixed();
        };
        operation = null;
        lastOperand = null;
        fixedFlag = null;
        inputWindow.value += '=' + result + '\n';
        history = inputWindow.value;
    }
    if (operation === 'sub') {
        const cuttingLength = history.toString().length + lastOperand.toString().length + 1;
        const secondOperand = parseFloat(inputWindow.value.slice(cuttingLength));
        if (fixedFlag === 1) {
            result = (lastOperand - secondOperand).toFixed(5);
        } else {
            result = (lastOperand - secondOperand).toFixed();
        };
        operation = null;
        lastOperand = null;
        fixedFlag = null;
        inputWindow.value += '=' + result + '\n';
        history = inputWindow.value;
    }
    if (operation === 'mul') {
        const cuttingLength = history.toString().length + lastOperand.toString().length + 1;
        const secondOperand = parseFloat(inputWindow.value.slice(cuttingLength));
        if (fixedFlag === 1) {
            result = (lastOperand * secondOperand).toFixed(5);
        } else {
            result = (lastOperand * secondOperand).toFixed();
        };
        operation = null;
        lastOperand = null;
        fixedFlag = null;
        inputWindow.value += '=' + result + '\n';
        history = inputWindow.value;
    }
    if (operation === 'div') {
        const cuttingLength = history.toString().length + lastOperand.toString().length + 1;
        const secondOperand = parseFloat(inputWindow.value.slice(cuttingLength));
        result = lastOperand / secondOperand;
        fixedFlag = null;
        operation = null;
        lastOperand = null;
        inputWindow.value += '=' + result + '\n';
        history = inputWindow.value;
    }
    if (operation === 'inverse') {
        result = -lastOperand;
        operation = null;
        lastOperand = null;
        fixedFlag = null;
        inputWindow.value += '=' + result + '\n';
        history = inputWindow.value;
    }
    if (operation === 'sqrt') {
        result = Math.sqrt(lastOperand);
        operation = null;
        lastOperand = null;
        fixedFlag = null;
        inputWindow.value += '=' + result + '\n';
        history = inputWindow.value;
    }
});

