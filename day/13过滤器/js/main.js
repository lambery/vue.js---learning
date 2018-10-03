
Vue.filter('currency', function (val, unit) { //可以传第二个参数unit
  var val = val || 0;
  //return val + '元';
  var unit = unit || 'RMB';
  return val + unit;
});

Vue.filter('meter', function (val, unit) { //可以传第二个参数unit
  var val = val || 0;
  var unit = unit || 'm';
  return (val/1000).toFixed(2) + unit;  //保留2位小数
});

new Vue({
  el: '#app',
  data :{
    price: 10,
    length: 10
  }
});