export function capitalise (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
export function reverseString (string) {
    let toBeReturned = '';
    for (let i = string.length - 1; i > -1; i--) {
        toBeReturned += string[i];
    }
    return toBeReturned;
}

export const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    }
}

console.log(calculator.add(2, 2));