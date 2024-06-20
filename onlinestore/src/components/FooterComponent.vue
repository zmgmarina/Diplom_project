<template>
 <footer class="footer">
  <div class="footer__line"></div>
  <div class="footer__flex">
    <div class="footer__logo">
      <div class="footer__logo-brand">
        <router-link to="/" class="footer__title-container-link"
          >Интернет-магазин для мам и малышей</router-link
        >
        <img
          class="header__ikon-kids"
          src="../assets/image/малыш.jpg"
          alt="image"
        />
      </div>
    </div>
    <div>
      <div class="footer__socialNetwork-link">
        <a href="#">
          <img class="header__icon" src="../assets/image/vk.png" alt="" />
        </a>
        <a href="#">
          <img
            class="header__icon"
            src="../assets/image/telegram1.png"
            alt=""
          />
        </a>
      </div>
      <form class="footer__subscription-email-form" action="post">
        <div class="footer__input">
          <div class="footer__title">Подписывайтесь на акции и скидки</div>
          <input
            type="text"
            name="email"
            value=""
            placeholder="Ваш E-mail"
            class="footer-subscription-email-input"
          />
          <button
            data-action="submit"
            class="footer__subscription-email-submit"
          >
        <img height="30" src="../assets/image/right-arrow.png" alt="btn-image"></button>
        </div>
      </form>
    </div>

    <nav class="footer__nav">
      <router-link class="footer__page-link" to="/"
        >Главная страница
      </router-link>
      <router-link class="footer__page-link" to="/account"
        >Личный кабинет
      </router-link>
      <router-link class="footer__page-link" to="/catalog"
        >Каталог
      </router-link>
      <router-link class="footer__page-link" to="/article"
        >Полезные статьи
      </router-link>
    </nav>

    <div class="footer__contacts">
      <a class="footer__page-link" href="#">Скидки</a>
      <a class="footer__page-link" href="#">Контакты</a>
      <a class="footer__page-link" href="#">Доставка</a>
      <a class="footer__page-link" href="#">Подарочные сертификаты</a>
    </div>
  </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
