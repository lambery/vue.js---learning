var routes1 = [
  {
    path: '/',
    component: {
      template:`
       <h1>首页</h1> 
      `
    }
  },
  {
    path: '/login',
    component: {
      template: `
       <h1>登陆</h1> 
      `
    }
  },
  {
    path: '/post',
    meta: {
      login_required: true
    },
    component: {
      template: `
         <div>
         <h1>帖子管理</h1>
               <router-link to="rain" append>后座</router-link>
               <router-view></router-view>
</div>
      `
    },
    children: [
      {
        path: 'rain',
        component: {
          template: `
            <h2>雨按时的天</h2>
          `
        }
      }
    ]
  }
];

var router =new VueRouter({
  routes: routes1
});

router.beforeEach(function (to,from,next) {
  var logged_in = false;
  console.log(to);
  if (!logged_in && to.matched.some(function (item) {
      //return item.path == '/post';  设置好meta就不用这么写，
      return item.meta.login_required;
    }))
    next('/login');
  else
    next();
});

router.afterEach(function (to,from) {

});

new Vue({
  el:'#app',
  router: router
});