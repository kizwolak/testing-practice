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

export function caesarCipher(string, shift) {
    let toBeReturned = '';
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        let shiftedCharCode = charCode + shift;
        if (65 <= charCode && charCode <= 90) {
            if (shiftedCharCode > 90) {
                let actualShift = (shiftedCharCode) - 91;
                let actualLetter = 65 + actualShift;
                toBeReturned += String.fromCharCode(actualLetter);
            } else {
                toBeReturned += String.fromCharCode(shiftedCharCode);
            }
        } else if (97 <= charCode && charCode <= 122) {
            if (shiftedCharCode > 122) {
                let actualShift = (shiftedCharCode) - 123;
                let actualLetter = 97 + actualShift;
                toBeReturned += String.fromCharCode(actualLetter);
            } else {
                toBeReturned += String.fromCharCode(shiftedCharCode);
            }
        }
    }
    return toBeReturned;
}

export function analyseArray (array) {
    const average = function (array) {
        let total = 0;
        for (const number of array) {
            total += number;
        }
        return total/array.length;
    };
    const calculatedAverage = average(array);
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;
    return {
        average: calculatedAverage,
        min: min,
        max: max,
        length: length,
    }
}

