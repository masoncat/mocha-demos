/**
 * Created by wm.liu on 2018/5/8.
 */
import chai from 'chai';
import http from 'http';

let expect = chai.expect;
describe('hooks', function () {
    var beforeFlag, beforeTimer = 0;

    beforeEach(function () {
        beforeTimer++
    })
    it('first test', function () {
        expect(beforeTimer).to.be.equal(1);
        expect(beforeFlag).to.be.equal('before');
    })
    before(function () {
        beforeFlag = 'before';
    });
    it('second test', function () {
        expect(beforeTimer).to.be.equal(2);
        expect(beforeFlag).to.be.equal('before');
    })
});