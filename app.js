var express=require('express');
var app =express();
var path = require('path');
var fs = require('fs')
var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
//设置可跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
 var login=[
    {
        username:'admin',
        password:'123456'
    }
]
//登录用户
app.get('/',function(req,res){
    res.status(200),
    res.json(login)
    });
app.post('/wdltest',function(req,res){
    console.log(req.stack);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.json(req.body)
})

//读取文件路径
app.get('/data',function(req,res){
    var file = path.join(__dirname,'data.json')
    fs.readFile(file,'utf-8',function(err,data){
        if(err){
            res.send('err')
        }
        else{
            res.send(data)
        }
    })
})
//用户信息
app.get('/login',function(req,res){
    var file = path.join(__dirname,'login.json')
    fs.readFile(file,'utf-8',function(err,data){
        if(err){
            res.send('err')
        }
        else{
            res.send(data)
        }
    })
})
//监听端口号
var server = app.listen(3001, function () {

    var host = server.address().address;

     var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    })
