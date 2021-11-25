<template lang="">
  <div class="docker">
    <span v-for="(item, index) in dockerList"
    :class="{'docker__item': true,'docker__item--active':index == currentIndex}"
    :key= "item.icon"
    class="docker__item"
    >
    <router-link :to='item.to'>
      <div class="iconfont" v-html="item.icon"/>
      <div class="docker__title">{{item.text}}</div>
    </router-link>
    </span>
  </div>
</template>
<script>
export default {

  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe751;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe63f;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe645;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe8a0;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import "../style/viriables.scss";
@import "../style/mixins.scss";
.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontcolor;
  /* background: green; */
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
      color: #333;
    }
    &--active {
      color: blue;
    }
  }

  &__title {
    color: #333;
    font-size: 0.1rem;
    transform: scale(0.5 0.5);
    transform-origin: center top;
  }
}
</style>
