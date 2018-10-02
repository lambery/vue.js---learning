var app = new Vue({
  el: '#app',
  data: {},
  methods: {
    onClick: function () {
      alert('hello')
    },
    onEnter: function () {
      document.querySelector('button').style.cssText='background:red'
    },
    onOut: function () {
      document.querySelector('button').style.cssText='';
      console.log(2);
    },
    onSubmit:function (e) {
      //e.preventDefault();
      console.log(121);
    },
    onKeyup:function () {
      console.log('key press')
    },
    onEnter2:function () {
      console.log('enter')
    }
  }
});