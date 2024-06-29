function appendToDisplay(value) {
    document.calc.expression.value += value;
}

function clearDisplay() {
    document.calc.expression.value = '';
    document.calc.result.value = '';
}

function deleteLast() {
    document.calc.expression.value = document.calc.expression.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.calc.expression.value);
        document.calc.result.value = result;
    } catch (e) {
        document.calc.result.value = 'Error';
    }
}

