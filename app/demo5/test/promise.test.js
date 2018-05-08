/**
 * Created by wm.liu on 2018/5/8.
 */
import chai from 'chai';
import http from 'http';

let expect = chai.expect;
describe('promise 异步测试', () => {
    it('异步请求返回一个对象', () => {
        return http.get('http://api.github.com',(res)=>{
            expect(res).to.be.an('object');
            res.json('success');
        });
    });
});