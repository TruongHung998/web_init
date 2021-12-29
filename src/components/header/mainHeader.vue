<template>
  <div className="main-header">
    <div class="logo">
      <router-link to="/">
        <img srcset="../../assets/image/ecologo.png 3x" alt="Header Logo">
      </router-link>
    </div>
    <div class="center-container">
      <div class="search-area">
        <button class="searchbox-btn">
          <i class="icofont-search" style="font-size: 20px"></i>
        </button>
        <input class="input-field" type="text" placeholder="Tìm kiếm">
      </div>
      <div class="listing">
        <button class="listing-btn" v-on:click="isHidden = !isHidden">
          <i class="icofont-navigation-menu"/>
          <span style="padding-left: 0.5em">Danh mục</span>
        </button>
      </div>
    </div>
    <div class="list-header">
      <div class="wrap-list">
        <div class="flex items-center justify-center">
          <span>Hotline</span>
          <i class="icofont-phone"/>
          <span>(028) 38 115 118</span>
        </div>
        <button>
          <i class="icofont-user-alt-7"/>
          <span>Đăng nhập</span>
        </button>
        <el-button>
          <i class="icofont-cart-alt" style="font-size: 24px"/>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  setup() {
    return {
      onSubmit() {

      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "header";
</style>
