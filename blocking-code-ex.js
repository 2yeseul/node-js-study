// node.js에서는 require 메서드를 통해 외부 모듈을 가져올 수 있다
var fs = require("fs");

// readFileSync 메서드는 인자의 path에 있는 내용을 반환
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program has ended");