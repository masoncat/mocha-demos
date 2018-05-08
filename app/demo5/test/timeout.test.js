/**
 * Created by wm.liu on 2018/5/8.
 */
import chai from 'chai';

let expect = chai.expect;
describe('timeout -超时测试',(done)=>{
    var x = true;
    var func = function () {
        x = false;
        console.log('load timeout')
        expect(x).to.be.not.ok;
        done();
    }
    console.log('load first')

    setTimeout(func,4000);
})