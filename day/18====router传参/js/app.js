var routes1 = [
  {
    path: '/',
    component:{
      template:`
      <div>
        <h1>首页</h1>
      </div>
      `
    }
  },
  {
    path: '/about',
    component:{
      template:`
      <div>
        <h1>关于我们</h1>
      </div>
      `
    }
  },
  {
    path: '/user/:name',
    component:{ //query通过url？来传参数
      template:`
      <div>
        <h1>我叫：{{$route.params.name}}</h1>
        <h1>我今年：{{$route.query.age}}</h1> 
      </div>
      `
    }
  }
];

var router =new VueRouter({
  routes: routes1
});

new Vue({
  el:'#app',
  router: router
});