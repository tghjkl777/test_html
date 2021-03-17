//웹 서버를 돌려주는 코드 익스프레스 이용해서 웹서버 돌리겠따. 
let express = require('express');
let app = express();

let router = require('./router/main')(app);
let port = process.env.PORT || 3000; //포트번호 3000번 할당

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static('public'));

// 클라이언트가 접속 되길 기다리는중
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
