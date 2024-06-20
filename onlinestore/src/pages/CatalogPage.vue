<template>
  <div class="top-section center">
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
  <div class="center">
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
    <div class="box-product">
      <div class="productItem" v-for="product in products" :key="product.id">
        <img
          class="productItem__img-product"
          :src="product.image"
          alt="photo"
        />
        <div class="productItem__star-box">
          <svg
            @click="changeStarColor"
            class="productItem__star"
            :id="product.id"
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_993_156)">
              <path
                d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_993_156"
                x="0.186424"
                y="0.431396"
                width="35.6271"
                height="34.3619"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_993_156"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_993_156"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="productItem__info">
          <a class="productItem__name" href="#">{{ product.name }}</a>
          <p class="productItem__price">{{ product.price }} руб.</p>
          <a class="productItem__rating" href="#"
            >Рейтинг: <span class="span"> {{ product.rating }} </span></a
          >
          <a class="productItem__reviews" href="#"
            >Отзывы: <span class="span">{{ product.reviewsCount }}</span>
          </a>
          <button class="productItem__btn-addCart" @click="addToCart(product)">Добавить в корзину</button>
          <div class="productItem__btn-amount">
            <!-- <button @click="amountMinus" type="button" class="btn-minus">-</button>
              <input type="number" v-model="amount" class="productItem__input" disabled="" value="1" data-max="7" data-min="1">
               <button @click="amountAdd" type="button" class="productItem__btn-plus">+</button> -->
          </div>
          
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
    ...mapGetters(["products", "linksCatalog", "cart"]),
  },
  methods: {
    changeStarColor(e) {
      const star = e.target.closest(".productItem__star");
      star.classList.toggle("productItem__star_active");
    },
    addToCart(product) {
      this.cart.push(product);
    }
  },
};
</script>

<style lang="scss" scoped></style>
