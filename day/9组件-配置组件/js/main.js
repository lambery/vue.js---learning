Vue.component('like',{
  template: '#like-tpl',
  data: function () {
    return{
      like_count:100,
      liked: false
    }
  },
  methods: {
    toggle_like:function () {
      if (!this.liked) {
        this.like_count ++;
        this.liked = true
      } else {
        this.like_count --;
        this.liked = false
      }
    }
  }
});

new Vue({
  el:'#app'
});