var Event = new Vue();//调度器

Vue.component('huahua',{
  template: `
   <div>
   我说：<input @keyup="on_change" v-model="i_said"/> {{i_said}}
   </div>
  `,
  methods:{
    on_change:function () {
      Event.$emit('huahua-said-something', this.i_said)
    }
  },
  data: function () {
    return {
      i_said:''
    }
  }
});
Vue.component('meimei',{
  template:`
     <div>
   花花说：{{huahua_said}}
   </div>
  `,
  data: function () {
    return {
      huahua_said:''
    }
  },
  mounted:function () { //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
    var that = this;
    Event.$on('huahua-said-something' ,function (data) { //回调函数
      that.huahua_said = data
    }); //监听它
  }
});

new Vue({
  el:'#app'
});