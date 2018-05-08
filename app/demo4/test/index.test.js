/**
 * Created by wm.liu on 2018/5/8.
 */
import multiply from '../src/index';
import chai from 'chai';

let expect = chai.expect;

describe('ES6测试',function () {
    it('2乘于3应该等于6',function () {
        expect(multiply(2,3)).to.be.equal(6);
    })
})