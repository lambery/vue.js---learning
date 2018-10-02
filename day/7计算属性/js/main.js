var app = new Vue({
  el: '#app',
  data: {
    math: 90,
    physics: 80,
    English: 75
  },
  methods: {}, //每次都从内存执行
  computed:{ //这会缓存下来，提高性能
    sum: function () {
      return this.math +this.physics + this.English;
    }
  }
});