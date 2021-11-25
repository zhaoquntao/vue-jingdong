import { computed } from 'vue'
import { useStore } from 'vuex'
// import { toRefs } from 'vue'
// 购物车相关路逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  // const { cartList } = toRefs(store.state)
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId,
      productId,
      productInfo,
      num
    })
  }
  //
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const notEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })
  // 获取名字
  const shopName = computed(() => {
    const productList = cartList[shopId]?.shopName || []
    return productList
  })

  // 计算
  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true }
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        if (product.check) {
          result.price += product.count * product.price
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })

  return { cartList, productList, shopName, changeCartItemInfo, calculations }
}
