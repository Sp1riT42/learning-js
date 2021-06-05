<template>
  <div>
    <div class="popup popup_inner">
      <button class="popup__close">"Закрыть"</button>
      <h2 class="popup__heading">MENU</h2>
      <p class="popup__account"><a class="popup__link" href="registration.html">Account</a></p>
      <p class="popup__cart"><a class="popup__link" href="cart.html">Cart</a></p>
      <div class="popup__item">
        <h3 class="popup__section">MAN</h3>
        <ul class="popup__list">
          <li class="popup__name"><a class="popup__link" href="#">Acessories</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Bags</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Denim</a></li>
          <li class="popup__name"><a class="popup__link" href="#">T-Shirt</a></li>
        </ul>
      </div>
      <div class="popup__item">
        <h3 class="popup__section">WOMAN</h3>
        <ul class="popup__list">
          <li class="popup__name"><a class="popup__link" href="#">Acessories</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Jackets & Coats</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Polos</a></li>
          <li class="popup__name"><a class="popup__link" href="#">T-Shirt</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Shirt</a></li>
        </ul>
      </div>
      <div class="popup__item">
        <h3 class="popup__section">KIDS</h3>
        <ul class="popup__list">
          <li class="popup__name"><a class="popup__link" href="#">Acessories</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Jackets & Coats</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Polos</a></li>
          <li class="popup__name"><a class="popup__link" href="#">T-Shirt</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Shirt</a></li>
          <li class="popup__name"><a class="popup__link" href="#">Bags</a></li>
        </ul>
      </div>
    </div>
    <div class="popup-hover popup-hover_inner"></div>
    <form class="cart center">
      <div class="cart-left">
        <CartItemComp

            v-for="product in $store.getters.getAllCart"
            :key="product.id_product"
            :product="product"
        ></CartItemComp>
        <h2 v-if="cartCount < 1">Корзина пуста</h2>
        <div class="cart-box">
          <button class="cart-box__button">Clear Shopping Cart</button>
          <button class="cart-box__button">Continue Shopping</button>
        </div>

      </div>
      <div class="cart-right">
        <div class="cart__shipping">
          <h4 class="cart__shipping__heading">SHIPPING ADRESS</h4>
          <input class="cart__shipping__input" type="text" placeholder="Bangladesh">
          <input class="cart__shipping__input" type="text" placeholder="State">
          <input class="cart__shipping__input" type="text" placeholder="Postcode / Zip">
          <button class="cart__shipping__button">GET A QUOTE</button>
        </div>
        <div class="cart__shipping__total">
          <p class="cart__shipping__total__sub-p">SUB TOTAL <span
              class="cart__shipping__total__sub-price">{{$store.getters.getSumCart}}$</span></p>
          <p class="cart__shipping__total__grand-p">GRAND TOTAL <span
              class="cart__shipping__total__grand-price">{{$store.getters.getSumCart}}$</span></p>
          <hr class="cart__shipping__total__hr">
          <button class="cart__shipping__total__button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CartItemComp from "@/components/CartItemComp";
export default {
  name: "Cart",
  components: {CartItemComp},
  data() {
    return {
    }
  },
  methods: {
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

</style>