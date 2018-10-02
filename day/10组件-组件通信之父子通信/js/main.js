Vue.component('user', {
 // template: '<button @click="on_click()">坍塌</button>',
  template: '<a :href="\'/user/\'+username">@{{username}}</a>', //  \'转义符
  props: ['username'], //收到html中的msg   父组件可以使用 props 把数据传给子组件。
  methods:{
    // on_click: function () {
    //   alert(this.msg);
    // }
  }
});

new Vue({
  el: '#app'
});