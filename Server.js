const http = require('http')
// http를 모듈로 불러오는 변수 선언
const fs = require('fs')
// fs를 모듈로 불러오는 변수 선언

http.createServer( (req, res) => {
    // http의 createServer 메소드를 사용해 서버를 만든다.
    fs.readFile('./Server.html', (err, data) => {
        // fs의 readFile로 첫번째 인자(url)로 파일을 읽어온다.
        if(err) {
            // 만약 에러라면 에러를 리턴하고
            console.log(err)
            return
        }
        // 아니라면 데이터를 브라우저에 띄우고 연결을 끊는다.
        res.end(data)
    })
}).listen(8080, () => {
    // 8080 포트를 읽어오겠다는 것
    console.log('8080 서버에 성공적으로 연결되었습니다.')
    // 연결 성공 메세지
})
