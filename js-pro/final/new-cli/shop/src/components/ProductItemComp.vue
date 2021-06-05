<template>
<!--  <article class="card" v-for="card in $store.getters.getAllProducts" :key="card.id_product">
    &lt;!&ndash;          <a class="card__link" href="product.html">&ndash;&gt;
    <router-link class="card__link" :to="'/product/'+ card.id_product" :item="card">
      <div class="card__img">
        <img class="card__photo" :src="card.img" alt="photo-1">
      </div>
    </router-link>

    &lt;!&ndash;          </a>&ndash;&gt;
    <div class="card__content">
      <h3 class="card__heading">{{card.product_name}}</h3>
      <p class="card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of
        cool
        Kym Ellery teams up with Moda Operandi.</p>
      <div class="card__price">${{card.price}}</div>
    </div>
    <a class="card__cart" href="#">Add to Cart</a>
  </article>-->
  <article class="card" >
    <router-link class="card__link" :to="'/product/'+ product.id_product" :product="product">
      <div class="card__img">
        <img class="card__photo" :src="`${urlImg}/`+product.img" alt="photo-1">
      </div>
    </router-link>
    <div class="card__content">
      <h3 class="card__heading">{{product.product_name}}</h3>
      <p class="card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of
        cool
        Kym Ellery teams up with Moda Operandi.</p>
      <div class="card__price">${{product.price}}</div>
    </div>
    <a class="card__cart" href="#" @click.prevent="addCart(product)">Add to Cart</a>
  </article>
</template>

<script>
export default {
  name: "ProductItemComp",
  props:{
    product:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      urlImg: document.location.origin
    }
  },
  methods: {
    addCart(product) {
        let find = this.$store.getters.getAllCart.find(el => el.id_product === product.id_product)
        if(find){
          let newQuantity = find.quantity + 1
          this.$store.dispatch('putJson', {url:`/api/cart/${find.id_product}`, data: {quantity: newQuantity}})
          find.quantity++
        } else {
              let prod = Object.assign({quantity: 1}, product);
          this.$store.dispatch('postJson', {url: '/api/cart', data: prod})
        }

    },
  }

}
</script>

<style scoped>

</style>