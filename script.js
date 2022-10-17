
// Version 1.0 code, too messy so starting over in html script tag

const add = (num1, num2) => num1 + num2;

        const subtract = (num1, num2) => num1 - num2;

        const multiply = (num1, num2) => num1 * num2;

        const divide = (num1, num2) => num1 / num2;
        
        function operate(operator, num1, num2) {
            console.log(operator);
            switch (operator) {
                case 'add':
                    return add (num1, num2);
                    break;
                case ('subtract'):
                    return subtract (num1, num2);
                    break;
                case ('multiply'):
                    return multiply (num1, num2);
                    break;
                case ('divide'):
                    return divide (num1, num2);
                    break;
            }
        };

        let displayValue = "";
        let number1 = 0;
        let number2 = 0;
        let operation = '';

        const updateDisplay = () => {
            document.querySelector('#display').textContent = displayValue;
        };

        const buttons = document.querySelectorAll('.number');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                displayValue += button.dataset.value;
                console.log(button.dataset.value);
                updateDisplay();
            });
        });

        const operators = document.querySelectorAll('.operator');
        operators.forEach((operator) => {
            operator.addEventListener('click', () => {
                if (number1 !== 0){ evaluate(); }

                if ( number1 === +displayValue ) {
                    operation = operator.dataset.value;
                    return;
                }
                number1 = +displayValue;
                operation = operator.dataset.value;
                console.log(operation);
                displayValue = '';
            })
        });

        const equals = document.querySelector('.equals');
        equals.addEventListener('click', evaluate);

        function evaluate () {
            if(operation === '') { return };
            displayValue = operate(operation, number1, +displayValue);
            console.log(displayValue);
            displayValue = +displayValue.toFixed(6)
            updateDisplay();
            operation = '';
            displayValue = '';
        };

        document.querySelector('.clear').addEventListener('click', () => {
            displayValue = '';
            updateDisplay();
            operation = '';
        });

        document.querySelectorAll('.button').forEach((button) => {
            button.addEventListener('mousedown', () => {
                button.classList.add('pressed');
            });
            button.addEventListener('mouseup', () => {
                button.classList.remove('pressed');
            })
        });