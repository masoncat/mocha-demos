import * as Calculator from './Calculator';
describe('Calculator', () =>{
    describe('sum operation', () =>{
        it('should sum up two operators', () =>{
            assert.equal(2, Calculator.add(1, 1));
        });
    });
});