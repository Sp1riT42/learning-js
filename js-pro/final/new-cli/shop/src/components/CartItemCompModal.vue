<template>
  <div class="cart__card" :product="product">
    <img class="cart__card__photo cart__img" :src="`${urlImg}/`+product.img" alt="photo">
    <div class="cart__card__content">

      <a href="">
        <h4 class="cart__card__content__heading">{{product.product_name}}</h4>
      </a>

      <p class="cart__card__content__p">Price: <span class="cart__card__content__price">${{product.price}}</span></p>
      <p class="cart__card__content__p">Color: <span class="cart__card__content__color">Red</span></p>
      <p class="cart__card__content__p">Size: <span class="cart__card__content__size">Xl</span></p>
      <p class="cart__card__content__p cart__card__content__p_input">Quantity: <input
          class="cart__card__content__input" type="number" @change="setQuantity(product)" v-model.number="product.quantity">
      </p>
    </div>
    <div class="cart__button-close" @click="removeCartItem(product)"></div>
  </div>
</template>

<script>
export default {
  name: "CartItemComp",
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      urlImg: document.location.origin
    }
  },
  methods: {
    removeCartItem(product) {
      this.$store.dispatch('deleteJson',{url: `/api/cart/${product.id_product}`, item: product})
          .then(() =>  this.$store.dispatch('fetchCart'))
    },
    setQuantity(product) {
      let find = this.$store.getters.getAllCart.find(el => el.id_product === product.id_product)
      if(find){
        this.$store.dispatch('putJson', {url:`/api/cart/${find.id_product}`, data: {quantity: product.quantity}})
        find.quantity = product.quantity
      }
    }
  }
}
</script>

<style scoped>
.cart__card {
  width: 260px;
  height: auto;
}
.cart__card__photo {
  height: 130px;
  width: auto;
}
.cart__card__content {
  margin-top: 14px;
  flex-basis: 60%;
  width: 132px;
}
.cart__card__content__heading {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cart__button-close {
  top: 6px;
  right: 6px;
  width: 16px;
  height: 16px;
}
.cart__button-close::before,
.cart__button-close::after {
  width: 12px;
  height: 2px;
  top: 7px;
  left: 2px;
}
.cart__card__content__p:first-of-type {
  margin-top: 4px;
}
.cart__card__content__p {
  font-size: 14px;
  line-height: 14px;
}
.cart__card__content__input {
  width: 28px;
  margin-left: 18px;
  font-size: 14px;
  line-height: 14px;
}
</style>