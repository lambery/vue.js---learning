Vue.component('balance',{
  template: `
<div>
     <show @show-balance="show_balance"></show>
     <div v-if="show">
     您的余额：￥98
     </div>
  </div>
  `,
  methods: {
    show_balance:function (data) {
      this.show = true;
      console.log(data);
    }
  },
  data: function () {
    return {
      show: false
    }
  }
});

Vue.component('show',{
  template: '<button @click="on_click()">显示余额</button>',
  methods: {
    on_click() {
      this.$emit('show-balance',{a:1, b:2}); //子组件可以使用 $emit 触发父组件的自定义事件
    }
  }
});

new Vue({
  el:'#app'
});