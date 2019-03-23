
//var base_url = 'http://192.168.0.177:4568';
var base_url = 'http://rmstest.cyfscn.com';
var proxyList = {
    base_url: base_url,
    '/fps': {
        // 测试环境
        target: base_url,  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            //'^/fps/api': '/fps/api'   //需要rewrite重写的,
        }
    },
    '/upload':{
        target: base_url,
        changeOrigin: true,
    }
}
module.exports = { proxyList:proxyList };
