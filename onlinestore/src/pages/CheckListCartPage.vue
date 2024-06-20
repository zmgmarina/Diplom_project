<template>
  <div class="checkboxCart center">
   <div class="checkboxCart__title">Корзина для новорожденного</div>
    <div class="checkboxCart__container">
      <div
        class="checkboxCart__item-list"
        v-for="item in checklistForNewborn"
        :key="item.id"
      >
        <div>
          <ul class="checkboxCart__list-width">
            <li class="checkboxCart__list">
              <input
                class="checkboxCart__input"
                type="checkbox"
                :value="nameProduct" checked
              />
              <label class="checkboxCart__label" :for="nameProduct">{{
                item.nameProduct
              }}</label>
            </li>
          </ul>
        </div>
        <div>
          <input
            class="checkboxCart__quantity"
            type="number"
            :value="item.quantity"
          />
        </div>
        <div v-for="product in filteredProducts"
          :key="product.id"
          class="checkboxCart__product-card"
        >
          <div
            v-if="product.name === item.nameProduct"
            class="checkboxCart__card-body"
          >
            <h5 class="checkboxCart__card-title">{{ product.name }}</h5>
            <img
              class="checkboxCart__card-image"
              height="100"
              :src="product.image"
              alt=""
            />
            <p class="checkboxCart__card-text">Размер: {{ product.height }}</p>
            <p class="checkboxCart__card-text">Цена: {{ product.price }}</p>

            <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Отзывы
            </a>
            <ul class="dropdown-menu">
              <li v-for="review in product.reviews" :key="review.id">
                <p class="dropdown-item">{{ review }}</p>
              </li>
              <li><a class="dropdown-item" href="#">Еще больше отзывов</a></li>
            </ul>
            </div>
          </div>
        </div>
        <div class="checkboxCart__buttons">
          <router-link to="/catalog">
          <button class="checkboxCart__btn">
            Добавить другой товар
          </button></router-link>
          <button class="checkboxCart__btn">Удалить товар</button>
        </div>
        <div >
          <h3 class="сheckboxCart__total-price"> Итого:</h3>
         
        </div>
      </div>
    </div>
     <div class="checkboxCart__button-box">
      <div >
          <h3 class="сheckboxCart__total-price-list"> Итоговая сумма:_____________</h3>
         
        </div>
          <button
            class="checkboxCart__button questions-container__btn-primary"
          >
            Оформить заказ
          </button>
          <router-link to="/checklist">
          <button
            class="checkboxCart__button questions-container__btn-cancel"
            type="submit"
          >
            Распечатать список товаров
          </button></router-link>
        </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      minRating: 4.9,
    };
  },

  methods: {},

  computed: {
    ...mapGetters([
      "selectedOptions",
      "checklistForNewborn",
      "products",
      "filteredProducts",
      "itemChecklist",
      "catalogBody"
    ]),

    //ПОЛУЧИЛИ ОТФИЛЬТРОВАННЫЙ СПИСОК ТОВАРОВ по  полу, росту, рейтингу
    filteredProducts() {
      return this.catalogBody.filter((product) => {
        return (
          product.gender === this.selectedOptions[0].answer &&
          product.height === this.selectedOptions[1].answer &&
          product.rating >= this.minRating
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
