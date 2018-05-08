/**
 * Created by wm.liu on 2018/5/8.
 */
var multiply = require('./multiply');
var expect = require('chai').expect;
describe('子目录测试',function () {
    it('2乘于3应该等于6',function () {
        expect(multiply(2,3)).to.be.equal(6);
    })
})