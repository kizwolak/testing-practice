import {capitalise, reverseString, calculator} from './practice.js';

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

