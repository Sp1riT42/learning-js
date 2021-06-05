<template>
  <div>
    <div class="header__bottom center">
      <h1 class="header__heading header__heading_registrarion">REGISTRATION</h1>
    </div>
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
    <section class="registration center">
      <div class="registration__left">
        <form class="registration__form" action="#">
          <h3 class="registration__input-heading">Your Name</h3>
          <input class="registration__input registration__first-name" placeholder="First Name" type="text"
                 required>
          <input class="registration__input registration__last-name" placeholder="Last Name" type="text" required>
          <div class="registration__sex-box">
            <input id="Male" type="radio" name="sex" checked>
            <label class="registration__radio" for="Male">Male</label>
            <input id="Female" type="radio" name="sex">
            <label class="registration__radio" for="Female">Female</label>
            <input id="Other" type="radio" name="sex">
            <label class="registration__radio" for="Other">Other</label>
          </div>
          <h3 class="registration__input-heading">Login details</h3>
          <input class="registration__input registration__email" placeholder="Email" type="email" required>
          <input class="registration__input registration__password" placeholder="Password" type="password"
                 required minlength="8">
          <p class="registration__input-p">Please use 8 or more characters, with at least 1 number and a mixture
            of
            uppercase and lowercase letters</p>
          <button class="registration__button">JOIN NOW</button>
        </form>
      </div>
      <div class="registration__right">
        <h3 class="registration__heading">LOYALTY HAS ITS PERKS</h3>
        <p class="registration__p">Get in on the loyalty program where you can earn points and unlock serious perks.
          Starting with these as soon as you join:</p>
        <ul class="registration__list">
          <li class="registration__list__item">
            15% off welcome offer
          </li>
          <li class="registration__list__item">
            Free shipping, returns and exchanges on all orders
          </li>
          <li class="registration__list__item">
            $10 off a purchase on your birthday
          </li>
          <li class="registration__list__item">
            Early access to products
          </li>
          <li class="registration__list__item">
            Exclusive offers & rewards
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Registration"
}
</script>

<style scoped>

</style>