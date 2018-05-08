/**
 * Created by wm.liu on 2018/5/8.
 */
var add = require('../src/add');
var expect = require('chai').expect;
describe('测试',function () {
    it('1加1应该等于2',function () {
        expect(add(1,1)).to.be.equal(2);
    })
    it('1加1应该不等于4',function () {
        expect(add(1,1)).to.not.equal(3);
    })
})