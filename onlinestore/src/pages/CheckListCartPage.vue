<template>
  <div class="checkboxCart">
    <!-- <div
  
              v-for="option in selectedOptions"
              :key="option.id"
              class="questions-container__result"
            >
              {{ option.answer }}
          </div> -->
    <div class="checkboxCart__title">Корзина для новорожденного</div>
    <div class="checkboxCart__container">
      <div
        class="checkboxCart__item-list"
        v-for="item in checklistForNewborn"
        :key="item.id"
      >
        <ul>
          <li class="checkboxCart__list">
            <input
              class="checkboxCart__input"
              type="checkbox"
              :value="nameProduct"
            />
            <label class="checkboxCart__label" :for="nameProduct">{{
              item.nameProduct
            }}</label>
          </li>
        </ul>
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="checkboxCart__product-card"
        >
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Rating: {{ product.rating }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button @click="getters">кнопка</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      minRating: 4.7,
    };
  },

  methods: {
    getters() {
     console.log(this.selectedOptions[0].answer); 
  },

  },
  
  computed: {
    ...mapGetters([
      "selectedOptions",
      "checklistForNewborn",
      "products",
      "filteredProducts",
    ]),

    //ПОЛУЧИЛИ ОТФИЛЬТРОВАННЫЙ СПИСОК ТОВАРОВ
    filteredProducts() {
      return this.products.filter((product) => {
        return (
          product.gender === this.selectedOptions[0].answer &&
          product.size === this.selectedOptions[1].answer
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
