<template>
  <header class="header">
    <div class="header__container">
      <div class="header__title-container">
        <router-link to="/" class="header__title-container-link"
          >Интернет-магазин для мам и малышей</router-link
        >
        <img
          class="header__ikon-kids"
          src="../assets/image/малыш.jpg"
          alt="image"
        />
      </div>
      <div class="header__nav-buttons">
        <router-link to="/account">
          <img
            class="header__img-user"
            src="../assets/image/female-user.png"
            alt=""
          />
        </router-link>
        <router-link to="/cart">
          <img
            class="header__img-cart"
            src="../assets/image/shopping-online.png"
            alt=""
          />
        </router-link>
      </div>
    </div>
    <div class="header__contacts-info">
      <div class="header__left">
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
      <div class="header__right">
        <form class="header__search-form">
          <input class="header__search-input" type="text" v-model="searchQuery" placeholder="Поиск товаров" />
          <button class="header__search-btn" type="submit">
            <img
              class="header__img-loupe"
              src="../assets/image/loupe1.png"
              alt=""
            />
          </button>
        </form>
        <a class="header__info-link" href="#">Скидки</a>
        <a class="header__info-link" href="#">Контакты</a>
        <a class="header__info-link" href="#">Доставка</a>
        <a class="header__info-link" href="#">Поддержка</a>
        <a class="header__info-link" href="#">Подарочные сертификаты</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
