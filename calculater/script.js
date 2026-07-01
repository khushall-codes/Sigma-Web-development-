let string = "";
let memory = 0;
let input = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

function updateDisplay(value) {
    input.value = value;
}

function evaluateExpression(expr) {
    try {
        return Function(`"use strict"; return (${expr})`)();
    } catch (error) {
        return "Error";
    }
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            string = String(evaluateExpression(string));
            updateDisplay(string);
        }
        else if (value === "AC") {
            string = "";
            updateDisplay(string);
        }
        else if (value === "M+") {
            const currentValue = Number(evaluateExpression(string));
            if (!isNaN(currentValue)) {
                memory += currentValue;
                string = "";
                updateDisplay(`M: ${memory}`);
            }
        }
        else if (value === "M-") {
            const currentValue = Number(evaluateExpression(string));
            if (!isNaN(currentValue)) {
                memory -= currentValue;
                string = "";
                updateDisplay(`M: ${memory}`);
            }
        }
        else if (value === "%") {
            const currentValue = Number(evaluateExpression(string));
            if (!isNaN(currentValue)) {
                string = String(currentValue / 100);
                updateDisplay(string);
            }
        }
        else {
            string += value;
            updateDisplay(string);
        }
    });
});