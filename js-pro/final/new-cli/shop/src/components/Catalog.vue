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
    <section class="featured-items featured-items_catalog center">
      <div class="featured-items__options">
        <details class="featured-items__filter">
          <summary class="featured-items__filter-name">
            FILTER
            <span class="featured-items__icon__box">
                          <svg class="featured-items__filter__icon" width="15" height="10" viewBox="0 0 15 10" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                  fill="black" />
                          </svg>
                      </span>
          </summary>
          <div class="featured-items__filter__box">
            <details class="featured-items__filter__category" open>
              <summary class="featured-items__filters__item_bd">
                <h4 class="featured-items__filters__heading">CATEGORY</h4>
              </summary>
              <ul class="featured-items__filters">
                <li class="featured-items__filters__item"><a class="featured-items__filters__item__link" href="#">Accessories</a></li>
                <li class="featured-items__filters__item">Bags</li>
                <li class="featured-items__filters__item">Denim</li>
                <li class="featured-items__filters__item">Hoodies & Sweetshirts</li>
                <li class="featured-items__filters__item">Jackets & Coats</li>
                <li class="featured-items__filters__item">Polo</li>
                <li class="featured-items__filters__item">Shirts</li>
                <li class="featured-items__filters__item">Shoes</li>
                <li class="featured-items__filters__item">Sweters & Knits</li>
                <li class="featured-items__filters__item">T-Shirts</li>
                <li class="featured-items__filters__item">Tanks</li>
              </ul>
            </details>
            <details class="featured-items__filter__category">
              <summary class="featured-items__filters__item_bd">
                <h4 class="featured-items__filters__heading">BRAND</h4>
              </summary>
            </details>
            <details class="featured-items__filter__category">
              <summary class="featured-items__filters__item_bd">
                <h4 class="featured-items__filters__heading">DESIGNER</h4>
              </summary>
            </details>
          </div>
        </details>
        <div class="featured-items__sort">
          <ul class="featured-items__list">
            <li class="featured-items__list__item">TRENDING NOW</li>
            <li class="featured-items__list__item featured-items__list__item_size">SIZE<div
                class="featured-items__checkbox">
              <div class="featured-items__checkbox__container">
                <input class="featured-items__checkbox__item" type="checkbox" id="XS" name="XS">
                <label class="featured-items__checkbox__label" for="XS">XS</label>
              </div>
              <div class="featured-items__checkbox__container">
                <input class="featured-items__checkbox__item" type="checkbox" id="S" name="S">
                <label class="featured-items__checkbox__label" for="S">S</label>
              </div>
              <div class="featured-items__checkbox__container">
                <input class="featured-items__checkbox__item" type="checkbox" id="M" name="M">
                <label class="featured-items__checkbox__label" for="M">M</label>
              </div>
              <div class="featured-items__checkbox__container">
                <input class="featured-items__checkbox__item" type="checkbox" id="L" name="L">
                <label class="featured-items__checkbox__label" for="L">L</label>
              </div>
            </div>
            </li>
            <li class="featured-items__list__item">PRICE</li>
          </ul>
        </div>
      </div>
      <div class="card__box card__box_catalog">
        <ProductItemComp
            v-for="product in paginate"
            :key="product.id_product"
            :product="product"
        ></ProductItemComp>
      </div>
      <div class="featured-items__pages">
        <div class="featured-items__pages__left">
          <svg class="featured-items__pages__arrow" width="9" height="14" viewBox="0 0 9 14" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z" fill="black" />
          </svg>
        </div>
        <ul class="featured-items__pages__list">
          <li v-for="pageNumber in totalPages()"
              v-if="Math.abs(pageNumber - 1 - currentPage) < 3 || pageNumber === totalPages() || pageNumber === 1"
              class="featured-items__pages__list__item"
          >
            <a
              class="featured-items__pages__list__item__link"
              :class="{'featured-items__pages__list__item_first': currentPage === pageNumber-1,
              last: (pageNumber === totalPages() && Math.abs(pageNumber-1 - currentPage) > 3),
              first:(pageNumber === 1 && Math.abs(pageNumber - currentPage) >= 3)}"
              @click.prevent="setPage(pageNumber-1)"
              href="#">{{pageNumber}}</a>
          </li>

        </ul>
        <div class="featured-items__pages__right">
          <svg class="featured-items__pages__arrow" width="9" height="14" viewBox="0 0 9 14" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z" fill="black" />
          </svg>
        </div>
      </div>
    </section>
    <section class="advantages">
      <div class="advantages__list center">
        <article class="advantages__item">
          <img class="advantages__icon" src="img/delivery.svg" alt="delivery">
          <h3 class="advantages__heading">Free Delivery</h3>
          <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with extensive models.</p>
        </article>
        <article class="advantages__item">
          <img class="advantages__icon" src="img/sales.svg" alt="delivery">
          <h3 class="advantages__heading">Sales & discounts</h3>
          <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with extensive models.</p>
        </article>
        <article class="advantages__item">
          <img class="advantages__icon" src="img/quality.svg" alt="delivery">
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
  name: "Catalog",
  components: {ProductItemComp},
  data(){
    return {
      searchKey: '',
      currentPage: 0,
      itemsPerPage: 3,
      resultCount: 0,
      list: this.getAllProducts,
      firstLink: 'featured-items__pages__list__item_first',
      lastLink: 'featured-items__pages__list__item_last'
    }
  },
  methods: {
    setPage(pageNumber)  {
      this.currentPage = pageNumber
    },
    totalPages() {
      return Math.ceil(this.getAllProducts.length/this.itemsPerPage)
    },
  },
  computed: {

  getAllProducts() {
    return this.$store.getters.getFilterProducts
  },

    paginate() {
        this.resultCount = this.getAllProducts?.length
        if (this.currentPage >= this.totalPages) {
          this.currentPage = this.totalPages - 1
        }
        let index = this.currentPage * this.itemsPerPage
        return this.getAllProducts?.slice(index, index + this.itemsPerPage)


    }



  },
  mounted() {
  },
}
</script>

<style scoped>
.first::after {
  content:'...'
}

.last::before {
  content:'...'
}
</style>