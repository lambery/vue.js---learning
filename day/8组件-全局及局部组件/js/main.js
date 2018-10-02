// Vue.component('alert', {
//   template: '<button @click="on_click">弹窗</button>',
//   methods: {
//     on_click:function () {
//       alert('888');
//     }
//   }
// });

//Vue.component('alert');

new Vue({
  el:'#seg1',
  components: {
    'alert':{
      template: '<button @click="on_click">弹窗</button>',
      methods: {
        on_click:function () {
          alert('888');
        }
      }
    }
  }
});

new Vue({
  el:'#seg2',
  components: {
    'alert22':{
      template: '<button @click="on_click">弹窗</button>',
      methods: {
        on_click:function () {
          alert('000');
        }
      }
    }
  }
});