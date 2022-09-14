const solution = require('./largestNumber.js');

test('test 1', () => {
    expect(solution(2)).toBe(99);
});

test('test 2', () => {
    expect(solution(1)).toBe(9);
});

test('test 3', () => {
    expect(solution(7)).toBe(9999999);
});

test('test 4', () => {
    expect(solution(4)).toBe(9999);
});

test('test 5', () => {
    expect(solution(3)).toBe(999);
});
