'use strict';

const str1 = '{[]}'
const [_, __, ...args] = process.argv;
if (process.argv.length < 2) {
    throw new Error('Аргументы не переданы');
}
const massiv = args; // получили аргументы
for (let i = 0; i < massiv.length; i++) {
    let str = [];
    const regex = /([a-zA-Z1-9_+=/|?!@#$%^'";:\\-])/g;
    let  result = massiv[i].replace(regex,'');
    const finalResult = isValid(result);
    console.log(result, finalResult);
}
    function isValid(str) {
        let stack = [];
        let rules = {
            ')': '(',
            '}': '{',
            ']': '[',
        };
    const brackets = (str) => {
    if( typeof str !== 'string' || str.length < 2) {
        return false;
    }}
        for (let i = 0; i < str.length; i++) {
            const current = str[i];
            if (isClosed(current)) {
                if (rules[current] !== stack.pop()) // Сравниваем с верхним значением стэка и удаляем его
                    return false;
            } else {
                stack.push(current); // Положить скобку в стэк
            }
        }
        return stack.length === 0; // Проверка на непарную скобку
    }

function isClosed(ch) {
    return [')', ']', '}'].indexOf(ch) > -1;
}


