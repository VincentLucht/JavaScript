function add(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    };
    console.log(sum);
};

function subtract(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum -= number;
    };
    console.log(sum);
};

function multiply(num1, ...numbers) {
    let sum = num1;
    for (let number of numbers) {
        sum *= number;
    };
    console.log(sum);
};

function divide(num1, ...numbers) {
    let sum = num1;
    for (let number of numbers) {
        sum /= number;
    };
    console.log(sum);
};