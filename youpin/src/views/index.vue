<template>
  <div>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <van-tabbar
      v-model="active"
      active-color="#845f3f"
      inactive-color="#666666"
    >
      <van-tabbar-item icon="home-o">
        <router-link to="/home" tag="div" append>首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="coupon-o">
        <router-link to="/classification" tag="div" append>分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="cart-o">
        <router-link to="/shopcart" tag="div" append>购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="user-o">
        <router-link to="/mine" tag="div" append>我的</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.router-link-active {
  font-weight: 600;
}
</style>