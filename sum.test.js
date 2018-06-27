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

var a1;
beforeEach(() => {
    a1 = 1;
});
test('beforeEeach', () => {
    expect(a1 + 2).toBe(3);
});

describe('outer', () => {
    console.log('describe outer-a');

    describe('describe inner 1', () => {
        console.log('describe inner 1');
        test('test 1', () => {
            console.log('test for describe inner 1');
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b');

    test('test 1', () => {
        console.log('test for describe outer');
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        console.log('describe inner 2');
        test('test for describe inner 2', () => {
            console.log('test for describe inner 2');
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
test('mock',()=>{
    function getDouble(val, callback) {
        if(val < 0) {
            return;
        }
        setTimeout(() => {
            callback(val * val);
        }, 100);
    };

    const mockFn = jest.fn();
    getDouble(10, mockFn);
    console.log('=======')
    console.log(mockFn);
    expect(mockFn).not.toHaveBeenCalled()
    setTimeout(() => {
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(mockFn).toHaveBeenCalledWith(20);
    }, 110);
});

test('mock function',()=>{
    const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(filterTestFn);

    console.log(result);
// > [11]
    console.log(filterTestFn.mock.calls);
// > [ [11], [12] ]
});