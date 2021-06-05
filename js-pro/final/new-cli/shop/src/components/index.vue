<template>
  <div>
    <section class="promo">
      <div class="promo__img">
        <img class="promo__photo" src="./../assets/./../assets/img/promo.png" alt="photo">
      </div>
      <div class="promo__text">
        <div class="promo__content">
          <h1 class="promo__heading">THE BRAND</h1>
          <p class="promo__info">OF LUXERIOUS <span class="select">FASHION</span></p>
        </div>
      </div>
      <div class="popup">
        <button class="popup__close">"Закрыть"</button>
        <h2 class="popup__heading">MENU</h2>

        <p class="popup__account">  <a class="popup__link" href="registration.html">Account</a></p>
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
      <div class="popup-hover"></div>
    </section>
    <section class="sale center">
      <div class="sale__top">
        <div class="sale__item"><img class="sale__img" src="./../assets/img/item-1.png" alt="for women">
          <div class="sale__text">
            <p class="sale__p">30% OFF</p>
            <h3 class="sale__heading">FOR WOMEN</h3>
          </div>
        </div>
        <div class="sale__item">
          <img class="sale__img" src="./../assets/img/item-2.png" alt="for men">
          <div class="sale__text">
            <p class="sale__p">HOT DEAL</p>
            <h3 class="sale__heading">FOR MEN</h3>
          </div>
        </div>
        <div class="sale__item">
          <img class="sale__img" src="./../assets/img/item-3.png" alt="for kids">
          <div class="sale__text">
            <p class="sale__p">NEW ARRIVALS</p>
            <h3 class="sale__heading">FOR KIDS</h3>
          </div>
        </div>
      </div>
      <div class="sale__bottom">
        <div class="sale__item_big">
          <img class="sale__img" src="./../assets/img/item-big.png" alt="accesories">
          <div class="sale__text">
            <p class="sale__p">LUXIROUS & TRENDY</p>
            <h3 class="sale__heading">ACCESORIES</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="featured-items center">
      <h2 class="featured-items__heading">Fetured Items</h2>
      <p class="featured-items__p">Shop for items based on what we featured in this week</p>
      <div class="card__box">
        <ProductItemComp
            v-for="product in $store.getters.getAllProducts.slice(0,9)"
            :key="product.id_product"
            :product="product"
        ></ProductItemComp>

        <!--        <article class="card">
          <a class="card__link" href="product.html">
            <div class="card__img">

              <img class="card__photo" src="./../assets/img/card-2.png" alt="photo-1">
            </div>
          </a>
          <div class="card__content">
            <h3 class="card__heading">ELLERY X M'O CAPSULE</h3>
            <p class="card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of
              cool
              Kym Ellery teams up with Moda Operandi.</p>
            <div class="card__price">$52.00</div>
          </div>
          <a class="card__cart" href="#">Add to Cart</a>
        </article>
        <article class="card">
          <a class="card__link" href="product.html">
            <div class="card__img">

              <img class="card__photo" src="./../assets/img/card-3.png" alt="photo-1">
            </div>
          </a>
          <div class="card__content">
            <h3 class="card__heading">ELLERY X M'O CAPSULE</h3>
            <p class="card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of
              cool
              Kym Ellery teams up with Moda Operandi.</p>
            <div class="card__price">$52.00</div>
          </div>
          <a class="card__cart" href="#">Add to Cart</a>
        </article>
        <article class="card">
          <a class="card__link" href="#">
            <div class="card__img">

              <img class="card__photo" src="./../assets/img/card-4.png" alt="photo-1">
            </div>
          </a>
          <div class="card__content">
            <h3 class="card__heading">ELLERY X M'O CAPSULE</h3>
            <p class="card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of
              cool
              Kym Ellery teams up with Moda Operandi.</p>
            <div class="card__price">$52.00</div>
          </div>
          <a class="card__cart" href="#">Add to Cart</a>
        </article>
        <article class="card">
          <a class="card__link" href="#">
            <div class="card__img">

              <img class="card__photo" src="./../assets/img/card-5.png" alt="photo-1">
            </div>
          </a>
          <div class="card__content">
            <h3 class="card__heading">ELLERY X M'O CAPSULE</h3>
            <p class="card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of
              cool
              Kym Ellery teams up with Moda Operandi.</p>
            <div class="card__price">$52.00</div>
          </div>
          <a class="card__cart" href="#">Add to Cart</a>
        </article>
        <article class="card">
          <a class="card__link" href="#">
            <div class="card__img">

              <img class="card__photo" src="./../assets/img/card-6.png" alt="photo-1">
            </div>
          </a>
          <div class="card__content">
            <h3 class="card__heading">ELLERY X M'O CAPSULE</h3>
            <p class="card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of
              cool
              Kym Ellery teams up with Moda Operandi.</p>
            <div class="card__price">$52.00</div>
          </div>
          <a class="card__cart" href="#">Add to Cart</a>
        </article>-->
      </div>
      <div class="featured-items__button">
<!--        <a class="featured-items__link" href="catalog.html">Browse All Product</a>-->
        <router-link class="featured-items__link" to="/catalog">Browse All Product</router-link>
      </div>
    </section>
    <section class="advantages">
      <div class="advantages__list center">
        <article class="advantages__item">
          <img class="advantages__icon" src="./../assets/img/delivery.svg" alt="delivery">
          <h3 class="advantages__heading">Free Delivery</h3>
          <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with extensive models.</p>
        </article>
        <article class="advantages__item">
          <img class="advantages__icon" src="./../assets/img/sales.svg" alt="delivery">
          <h3 class="advantages__heading">Sales & discounts</h3>
          <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with extensive models.</p>
        </article>
        <article class="advantages__item">
          <img class="advantages__icon" src="./../assets/img/quality.svg" alt="delivery">
          <h3 class="advantages__heading">Quality assurance</h3>
          <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with extensive models.</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import ProductItemComp from "@/components/ProductItemComp";

export default {
  name: "indexComp",
  components: {ProductItemComp},
  data() {
    return {
      products: [
          // {
          //   "id_product": 1,
          //   "img": "./img/card-1.png",
          //   "product_name": "ELLERY X M'O CAPSULE",
          //   "price": 52
          // },
          // {
          //   "id_product": 2,
          //     "img": "./img/card-2.png",
          //     "product_name": "ELLERY X M'O CAPSULE",
          //     "price": 62
          // },
          // {
          //   "id_product": 3,
          //     "img": "./img/card-3.png",
          //     "product_name": "ELLERY X M'O CAPSULE",
          //     "price": 32
          // }
      ]
    }
  },
  created() {
    // this.$store.dispatch('fetchProducts')
    // this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>

</style>