import Vue from 'vue'
import VueRouter from 'vue-router';
import maincss from './public/main.css';

if(module.hot) {
    module.hot.accept();
}

Vue.use(VueRouter);

const App = {
  template: `
    <div id="app">
    <br/>
      <h1>Server Status</h1>
      <br/>
      <router-link to="/index"><button class="btn-success">Home</button></router-link> 
      <router-link to="/Network"><button class="btn-success">Network Info</button></router-link>
      <router-link to="/CPU_Memory"><button class="btn-success">CPU & Memory Info</button></router-link> 
      <br/>     
      <router-view class="view"></router-view>
    </div>`
}

const Home = { 
    template: `<div>
                <br/>
                <hr/>
                <br/>
                <br/>
                <center>
                  <div id="running" class="good">
                      All systems operational
                  </div>
                </center>
               </div>`
}
const Traffic = { 
    template: `<div>
                <br/>
                <hr/>
                <br/>
                <h3>Network Traffic</h3>
                <img src="/static/status/if_eth0-day.png"/>
                <br/>
                <br/>
                <h3>Netstat</h3>
                <img src="/static/status/netstat-day.png"/>
               </div>` 
}
const CPUMemory = { 
    template: `<div>
                <br/>
                <hr/>
                <br/>
                <h3>Memory Status</h3>
                <img src="/static/status/memory-day.png"/>
                <br/>
                <br/>
                <h3>CPU Status</h3>
                <img src="/static/status/cpu-day.png"/>
               </div>` 
}


const router = new VueRouter({
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/index',name: 'home',component: Home },
    { path: '/Network', component: Traffic },
    { path: '/CPU_Memory', component: CPUMemory }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
