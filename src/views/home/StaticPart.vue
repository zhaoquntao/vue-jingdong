<template lang="">
  <div class="position">
    <span class="iconfont position__icon">&#xe8ae;</span>
    杭州市余杭区八方城 哈哈哈哈哈哈
    <span class="iconfont position__notice">&#xe96d;</span>
  </div>
  <div class="search">
    <span class="iconfont position__notice">&#xe741;</span>
    <span class="search__text">搜一下试试</span>
  </div>
  <div class="banner">
    <img
      class="banner__image"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div class="icons">
    <div class="icons__item"
    v-for="item in iconsList" :key="item.desc"
    >
      <image
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/${item.imgName}.png"
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '红包套餐' },
      { imgName: '菜市场', desc: '红包套餐' },
      { imgName: '水果店', desc: '红包套餐' },
      { imgName: '红包', desc: '红包套餐' },
      { imgName: '红包', desc: '红包套餐' },
      { imgName: '红包', desc: '红包套餐' },
      { imgName: '红包', desc: '红包套餐' },
      { imgName: '红包', desc: '红包套餐' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0.1rem;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .iconfont {
    display: inline-block;
    top: 0.12rem;
    padding: 0 0.12rem 0 0.16rem;
    font-size: 0.2rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  &__image {
    /* height: 0; */
    /* overflow: hidden; */
    /* padding-bottom: 25.4%; */
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>
