<template>
  <div id="app">
<!--    <img data-v-61dd7a3d="" src="./assets/img/logo.svg" alt="logo">-->
    <HeaderComp/>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/Header'
import FooterComp from "@/components/Footer";
//import Registration from "@/components/Registration";
import style from '@/css/style.css'
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
   // Registration
  },
  methods: {
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
          .catch(error => {
            //this.$refs.error.setError(error);
          });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
          .catch(error => {
            //this.$refs.error.setError(error);
          });
    },
    deleteJson(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
      }).then(result => result.json())
          .catch(error => {
            //this.$refs.error.setError(error);
          });
    },
  },
  created() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCart')


  },
  mounted() {

    // var link = document.querySelector(".header__icon_menu");
    // var popup = document.querySelector(".popup");
    // var popup_overlay = document.querySelector(".popup-hover");
    // var close = document.querySelector(".popup__close");
    // link.addEventListener("click", function (evt) {
    //   evt.preventDefault();
    //   popup.classList.add("popup_show");
    //   popup_overlay.classList.add("popup_show");
    // });
    // close.addEventListener("click", function (evt) {
    //   evt.preventDefault();
    //   popup.classList.remove("popup_show");
    //   popup_overlay.classList.remove("popup_show");
    // });
    // popup_overlay.addEventListener("click", function (evt) {
    //   evt.preventDefault();
    //   popup.classList.remove("popup_show");
    //   popup_overlay.classList.remove("popup_show");
    // });
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
