const express = require('express'); // 서버 기능 구현을 위한 core모듈 express 호출
const path = require('path'); // 경로 기능 제어를 위해 path 호출
const cors = require('cors'); // 다른 서버와 연동 호출
const app = express(); // 실행해라

app.use(cors()); // cors 미들웨어를 삽입합니다. / 다른 도메인에서 요청 보내면 응답해라

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. / get, post, use > 라우트륾 만드는 중요 메서드
  res.send({message:'hi🤭'});
});

app.listen(8080, ()=>{
  console.log('server is running on 8080')
})