const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening in 8080')
});

//
// http://localhost:8080/test 들어가면  됨.
app.get('/test', function(요청, 응답){
    응답.send('test맵로그입니다.');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html')
});

