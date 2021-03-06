/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="show = false">
 * ```
 */
export default {
  id: 'clickoutside',

  bind() {
    this.handler = (e) => {
      if (this.vm && !this.el.contains(e.target)) {
        this.vm.$eval(this.expression);
      }
    };
    document.addEventListener(this.arg || 'click', this.handler);
  },

  unbind() {
    document.removeEventListener(this.arg || 'click', this.handler);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
