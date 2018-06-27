const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4);
});
test('test expect', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
});
test('test number', () => {
    const num = 0.3;
    expect(0.1 + 0.2).toBeCloseTo(num);
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    // expect(compileAndroidCode).toThrow();
    // expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    // expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});

function sleep(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, s);
    });
}

test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await sleep();
    expect(data).toBe('peanut butter');
});

var a;
beforeEach(() => {
     a = 1;
});
test('beforeEeach', () => {
    expect(a + 2).toBe(3);
});