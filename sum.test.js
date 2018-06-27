const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4);
});
test('test expect',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined;
});