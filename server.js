var express = require('express');
var app = express();
var fs = require('fs');
// 라우터 모듈인 main.js 를 불러와 app에 전달
var router = require('./router/main')(app, fs);
// 서버가 읽을 수 있도록 HTML 위치를 정의 
app.set('views', __dirname + '/views');
// 서버가 html 렌더링을 할 때 EJS 엔진을 사용하도록 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function () {
    console.log('Express Server has started on port 3000');
})

app.use(express.static('public'));
