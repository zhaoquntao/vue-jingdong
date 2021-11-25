<template lang="">
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe697;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe86e;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"/>
    <Content :shopName="item.name" />
    <Cart />
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request.js'
import ShopInfo from '../../components/ShopInfo'
import Content from '../shop/Content'
import Cart from '../shop/Cart'
// 获取当前商品的信息
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shoplist/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 返回
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const { handleBackClick } = useBackRouterEffect()
    getItemData()

    return { item, handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  padding: 0.18rem;
}
.search {
  display: flex;
  margin: 0.14rem 0 0.04 rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.32rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    /* line-height: .32rem; */
    background: #f5f5f5;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
