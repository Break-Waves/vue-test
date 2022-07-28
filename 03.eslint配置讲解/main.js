import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/* 在下一行禁用eslint的no-console规则 */
/*eslint-disable-next-line no-console*/

/* 在下一行禁用eslint的规则 */
/*eslint-disable-next-line*/
console.log(1 == 1);

/* 在后边的代码中 禁用eslint规则 */
/*eslint-disable*/
console.log(2 == 2);
console.log(2 == 2);