//引入的是vue的运行时版本 vue.runtime.min.js(相比较完整的vue来说,少了模板编译的内容,因为生产环境下不再需要模板编译)
import Vue from 'vue'
//使用完整版的js 可以使用template
// import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  /* 
    //额外的模板编译包提供了一个render配置
    //当Vue被实例化的时候,render函数执行,并传入一个createElement函数作为参数
    render: (createElement) => {
      //如果这个函数要创建元素,则第一个参数是标签名 第二个参数是内容
      // return createElement("h1", "123")
      //如果这个函数接受的是一个组件,则直接传入即可
      // return createElement(App)
    } 
  */

  //只有完整版的vue才能编译template模板
  // template: "<span>123</span>"
}).$mount('#app')