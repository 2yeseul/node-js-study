// events 모듈 사용 
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected() {
    console.log('Connection Successful');

    // data_recieved 이벤트를 발생시키기
    eventEmitter.emit('send event');
}

// connection 이벤트와 connectHandler 이벤트 핸들러 연동 
eventEmitter.on('connection', connectHandler);

// data_recieved 이벤트와 익명 함수 연동
// 함수를 변수 안에 담는 대신, .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('send event', function() {
    console.log('Data Received');
});

eventEmitter.emit('connection');

console.log('END');