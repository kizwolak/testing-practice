import {capitalise, reverseString, calculator, caesarCipher, analyseArray} from './practice.js';

test('return capitalised string', () => {
    expect(capitalise('hello')).toBe('Hello');
    expect(capitalise('test')).toBe('Test');
});

test('return reversed string', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('perform all basic operations', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('shift everything perfectly!', () => {
    expect(caesarCipher('Zztest', 1)).toBe('Aauftu');
});

test('output the right array values', () => {
    const testAnalysis = analyseArray([2, 1, 3, 2]);
    expect(testAnalysis.average).toBe(2);
    expect(testAnalysis.min).toBe(1);
    expect(testAnalysis.max).toBe(3);
    expect(testAnalysis.length).toBe(4);
});
