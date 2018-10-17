
var n1 = function (callback) {
  for (var i = 0; i < 6; i++) {
    callback&&callback(i);
  }
};

n1(function (i) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
});
//===========第二种===================
function cal(i) {
  return new Promise(function (resolve, reject) {
    console.log(i);
    setTimeout(resolve, 1000, i+1);
  })
}

var n2 = new Promise(function (resolve, reject) {
  resolve(0)
});

n2.then(cal)
  .then(cal)
  .then(cal)
  .then(cal)
  .then(cal)
  .then(cal);
