<template>
   <div class="banner">
      <img
        class="banner__img-background"
        src="../assets/image/beautifulpink.jpg"
        alt="image"
      />
      <div class="banner__content">
        <div class="banner__text">
          Соберем c Любовью для вас и вашего малыша корзину за считанные минуты.
        </div>
        <router-link to="/question" class="banner__link-switching-page">Идем собирать</router-link> 
      </div>
    </div>

    <div class="nav">
      <div class="nav__menu">
        <router-link to="/catalog" class="nav__menu-link" v-for="item in linksCatalog" :key="item.id">
          {{ item.category }}
        </router-link>
      </div>
      
    </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["linksCatalog"]),
  },
};
</script>
