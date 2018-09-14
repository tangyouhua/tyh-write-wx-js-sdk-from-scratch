/*
 * SDK 接口测试
 */
const should = require('should');
const qcloud = require('../index');

describe('index.js', function () {
    describe('module: qcloud', function () {
        it('should export login() method', function () {
            qcloud.login.should.be.a.Function();
        });
    });
});