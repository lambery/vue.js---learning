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
        <!--<router-link :to=" '/user/' + $route.params.name + '/more'">更多</router-link>-->
        <!--这样连续点两次会有bug-->
        <router-link to="more" append>更多</router-link>
        <router-view></router-view>
      </div>
      `
    },
    children: [
      {
        path: 'more',
        component: {
          template:`
          <div>
            用户{{$route.params.name}}的详细信息
           
            按时的锕埃里克的 杜拉克是埃里克萨德勒  上的拉客的爱丽丝的两岸三地 
          </div>
          `
        }
      }
    ]
  }
];

var router =new VueRouter({
  routes: routes1
});

new Vue({
  el:'#app',
  router: router
});