const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4);
});
test('test expect',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
});
test('test number',()=>{
    const num = 0.3;
    expect(0.1+0.2).toBeCloseTo(num);
});