//把共同要用的放一起
var base = {
  methods:{
    show: function () {
      this.visible = true;
    },
    hide: function () {
      this.visible = false;
    },
    toggle: function () {
      this.visible = !this.visible
    }
  },
  data: function () {
    return {
      visible: false
    }
  }
};


Vue.component('tooltip', {
  template: `
  <div>
    <span @mouseenter="show" @mouseleave="hide">bys</span>
    <div v-if="visible">
        伴手礼开单的数量锕
    </div>
  </div>
  `,
  mixins:[base],
  // methods: {
  //   show: function () {
  //     this.visible = true;
  //   },
  //   hide: function () {
  //     this.visible = false;
  //   }
  // }
  data: function () { //这里写的会把base的覆盖掉
    return {
      visible: true
    }
  }
});

Vue.component('popup', {
  template: `
  <div>
    <button @click="toggle">popup</button>
    <div v-if="visible">
    <span @click="hide">X</span>
    <h4>title</h4>
    Lasdoasd  osakdoan sa asjdadn mna adj;dasl .dadnh oiahs 
     </div>
  </div>
  `,
  mixins:[base]
  // methods:{
  //   toggle: function () {
  //     this.visible = !this.visible
  //   },
  //   hide: function () {
  //     this.visible = false;
  //   }
  // }
  // data: function () {
  //   return {
  //     visible: false
  //   }
  // }
});

new Vue({
  el: '#app',
  data:{

  }
});