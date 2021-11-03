setImmediate(() => {
  console.log('immediate');
});

process.nextTick(() => {
  console.log('nextTick');
})

setTimeout(() => {
  console.log('timeout');
}, 0);

// resolve된 Promise도 다른 콜백보다 우선시된다.
Promise.resolve().then(() => console.log('promise'));