<template>
  <div class="top-section">
    <div class="category-name">
      <a class="category-link" href="#">Популярные товары</a>
    </div>
    <div class="dropdown">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >Сортировать по...
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">цене ↑</a></li>
        <li><a class="dropdown-item" href="#">цене ↓</a></li>
        <li><a class="dropdown-item" href="#">рейтингу</a></li>
        <li><a class="dropdown-item" href="#">популярности</a></li>
        <li><a class="dropdown-item" href="#">размеру скидки</a></li>
        <li><a class="dropdown-item" href="#">новинки</a></li>
      </ul>
    </div>
  </div>
  <div class="content-flex">
    <div class="catalog-menu">
      <router-link
        to="/catalog"
        class="catalog-menu__link"
        v-for="item in linksCatalog"
        :key="item.id"
      >
        {{ item.category }}
      </router-link>
    </div>
    <div class="box-product center">
      <div class="productItem" v-for="product in products" :key="product.id">
        <img
          class="productItem__img-product"
          :src="product.image"
          alt="photo"
        />
        <div class="productItem__info">
          <a class="productItem__name" href="#">{{ product.name }}</a>
          <p class="productItem__price">{{ product.price }} руб.</p>
          <a class="productItem__rating" href="#"
            >Рейтинг: <span class="span"> {{ product.rating }} </span></a
          >
          <a class="productItem__reviews" href="#"
            >Отзывы: <span class="span">{{ product.reviews }}</span>
          </a>
          <div class="productItem__btn-amount">
            <!-- <button @click="amountMinus" type="button" class="btn-minus">-</button>
              <input type="number" v-model="amount" class="productItem__input" disabled="" value="1" data-max="7" data-min="1">
               <button @click="amountAdd" type="button" class="productItem__btn-plus">+</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showSortDropdown: false,
    };
  },
  computed: {
    ...mapGetters(["products", "linksCatalog"]),
  },
};
</script>

<style lang="scss" scoped></style>
