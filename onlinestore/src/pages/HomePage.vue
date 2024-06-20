<template>
  <div class="banner">
    <img
      class="banner__img-background"
      src="../assets/image/beautifulpink.jpg"
      alt="image"
    />
    <div class="banner__content">
      <div class="banner__text">
        Соберем  для вас и вашего малыша корзину за считанные минуты.
      </div>
      <router-link to="/question" class="banner__link-switching-page"
        >Идем собирать</router-link
      >
    </div>
  </div>

  <div class="nav">

    <a v-for="item in linksCatalog" :key="item.id"
      class="nav__menu-link"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >{{ item.category }}
    </a>

    <ul v-for="link in links" :key="link.id" class="dropdown-menu">
      <li class="nav__menu-item" v-for="linkItem in link.itemlinks" :key="linkItem.id">
        <router-link to="/catalog" class="dropdown-item">{{ linkItem }}</router-link>
      </li>
      
    </ul>
  </div>
  
  <div class="content-flex center">
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
     <div class="content-box__sale">
      <h1 class="content-box__title">СТАТЬЯ</h1>
      <img class="content-box__image" src="../assets/image/bottle2.jpeg" alt="">
      <p class="content-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit maxime nulla voluptates fugit eveniet distinctio minima omnis praesentium vero qui illum, ea aliquam quo facere voluptatem rem? Nemo accusantium architecto asperiores cumque! Nisi necessitatibus iste a exercitationem neque amet soluta inventore voluptas cum, aliquam, veniam quo deserunt corrupti molestiae. Libero architecto maxime iusto nobis voluptate numquam odio, deserunt, veritatis ratione, fugiat animi consequuntur dolorem minima temporibus quidem tenetur magnam nihil recusandae cupiditate perspiciatis tempora ab quod placeat. Fuga nemo explicabo cumque odio expedita id sequi autem illo in repudiandae, nesciunt illum vero, ipsa quis architecto incidunt! Quis, dignissimos quasi?</p>
     </div>
     
     <div class="content-box__sale">
      <h1 class="content-box__title">СТАТЬЯ</h1>
      <img class="content-box__image" src="../assets/image/diaper1.jpg" alt="">
      <p class="content-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit maxime nulla voluptates fugit eveniet distinctio minima omnis praesentium vero qui illum, ea aliquam quo facere voluptatem rem? Nemo accusantium architecto asperiores cumque! Nisi necessitatibus iste a exercitationem neque amet soluta inventore voluptas cum, aliquam, veniam quo deserunt corrupti molestiae. Libero architecto maxime iusto nobis voluptate numquam odio, deserunt, veritatis ratione, fugiat animi consequuntur dolorem minima temporibus quidem tenetur magnam nihil recusandae cupiditate perspiciatis tempora ab quod placeat. Fuga nemo explicabo cumque odio expedita id sequi autem illo in repudiandae, nesciunt illum vero, ipsa quis architecto incidunt! Quis, dignissimos quasi?</p>
     </div>
    </div>
    
   
   
  

  <!-- <div class="nav__menu">
        <router-link to="/catalog" class="nav__menu-link" v-for="item in linksCatalog" :key="item.id">
          {{ item.category }}
        </router-link>
      </div> -->
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["linksCatalog", "links"]),
  },
};
</script>
