const { add } = require('../src/calculator');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number for a single number', () => {
    expect(add("1")).toBe(1);
});

test('returns sum for two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('handles new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('throws an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow('Negative numbers not allowed: -2');
});

test('supports a custom single-character delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
});


test('supports a custom delimiter of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test('supports multiple custom delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
});


test('supports multiple custom delimiters of different lengths', () => {
    expect(add("//[***][%%]\n1***2%%3")).toBe(6);
});

test('ignores numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
});

test('supports custom delimiter and ignores numbers greater than 1000', () => {
    expect(add("//[***]\n1***1001***2")).toBe(3);
});
