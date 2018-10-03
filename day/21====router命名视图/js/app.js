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
    path: '/user',
    components:{ //复数！！！！！！！！！
      sidebar: {
        template:`
      <div>
        <ul>
          <li>用户列表</li>
          <li>权限管理</li>
        </ul>
      </div>      
      `
      },
      content: {
        template:`
      <div>三电缆 阿森纳打开安大略 阿拉善的啦案例的时间拉萨扩大你安德森</div>      
      `
      }
    }
  },
  {
    path: '/post',
    components:{ //复数！！！！！！！！！
      sidebar: {
        template:`
      <div>
        <ul>
          <li>t帖子列表</li>
          <li>权限管理</li>
        </ul>
      </div>      
      `
      },
      content: {
        template:`
      <div>三电缆 阿森纳打开安大略 阿拉善的啦案例的时间拉萨扩大你安德森</div>      
      `
      }
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