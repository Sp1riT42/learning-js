<template>
  <header class="header center">
    <div class="header__left">
      <router-link class="header__left__icon" to="/">
        <img src="./../assets/img/logo.svg" alt="logo">
      </router-link>
      <a href="#">
        <img class="header__search" src="./../assets/img/search.svg" alt="search">
      </a>
      <input class="header__search-text" type="text" @change="filterProduct(text)" v-model="text">
    </div>
    <div class="header__right">
      <a class="header__icon header__icon_menu" href="#">
        <img src="./../assets/img/menu.svg" alt="menu">
      </a>
      <router-link class="header__icon" to="/registration"><img src="./../assets/img/account.svg" alt="account"></router-link>

      <a class="header__icon" href="#" @click.prevent="showCart=!showCart">
        <div class="header__cart">
          <img src="./../assets/img/cart.svg" alt="cart">
          <span class="header__counter" v-if="cartCount > 0">{{cartCount}}</span>
        </div>
      </a>
      <div class="header__cart-popup" v-show="showCart">
        <router-link  to="/cart">
<!--          <img src="./../assets/img/cart.svg" alt="cart">-->
          <div class="header__cart-btn">Корзина</div>
        </router-link>
        <CartItemCompModal
            v-for="product in $store.getters.getAllCart"
            :key="product.id_product"
            :product="product"
        ></CartItemCompModal>
        <div v-show="!cartCount">
          <p>Корзина пуста</p>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import CartItemComp from "@/components/CartItemComp";
import CartItemCompModal from "@/components/CartItemCompModal";
export default {
  name: "Header",
  components: {CartItemComp, CartItemCompModal},
  data(){
    return {
      text: '',
      showCart: false
    }
  },
  methods: {
    filterProduct(text) {
      if (text.length > 0) {
        let regexp = new RegExp(text, 'i');
        this.$store.commit('setFilterProducts', this.$store.getters.getAllProducts.filter(el => regexp.test(el.product_name)))
      } else {
        this.$store.commit('setFilterProducts', this.$store.getters.getAllProducts)
      }

    }
  },
  computed: {
    cartCount() {
      return this.$store.getters.getCartCount
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.header__cart-popup {
  box-shadow: 0 0 5px rgba(0, 0, 0, .62);
  border-radius: 5px;
  box-sizing: border-box;
  right: 0;
  top: 130%;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 300px;
  z-index: 1;
}
.header__cart-popup::before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: -10px;
  right: 35px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
.header__cart-btn {
  cursor: pointer;
  padding: 4px 8px;
  color: #f26376;
  text-decoration: none;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  border: 1px solid #ff6a6a;
  transition-duration: 0.4s;
  width: 120px;
  margin: 0 auto 16px;
}
</style>