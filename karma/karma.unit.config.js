var webpack = require('webpack');
module.exports = function(config) {



    config.set({
        //设置Karma server的根目录
        basePath: '',

        //设置Karma会用到的测试框架
        frameworks: ['mocha', 'chai'],

        //将Karma的debug.html页面用来显示Mocha的测试报告
        client: {
            mocha: {
                reporter: 'html'
            }
        },

        //Karma要执行的测试文件, 这里只有webpack.unit.spec.js, 后面我们会看到这是为什么
        files: [
            'webpack.spec.js'
        ],

        //设置对每一个测试进行的预处理, 因为我们是测试ES6文件,
        //所以我们要先用webpack将他们转化成浏览器支持的ES5文件
        preprocessors: {
            'webpack.spec.js': [ 'webpack' ]
        },

        //对应webpack预处理的设置, 很简单, 只用到了babel-loader
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        },

        //禁止webpack在预处理输出日志信息
        webpackServer: {
            noInfo: true
        },

        //设置Karma输出日志风格
        reporters: ['dots'],

        //设置Karma服务器的监听端口
        port: 9876,

        //设置Karma输出日志为彩色
        colors: true,

        //设置Karma输出日志级别, 级别高于INFO的才输出
        logLevel: config.LOG_INFO,

        //设置监测测试文件内容并自动运行更新的测试文件
        autoWatch: true,

        //设置测试所用浏览器
        browsers: ['Chrome'],

        //设置是否Karma配置只运行一次
        singleRun: true,

    })
};