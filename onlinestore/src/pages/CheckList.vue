<template>
     <div class="checkboxList__container">
        <div class="checkboxList__title">Корзина для новорожденного</div>
      <div
        class="checkboxList__item-list"
        v-for="item in checklistForNewborn"
        :key="item.id"
      >
        <div>
          <ul class="checkboxList__list-width">
            <li class="checkboxList__list">
              <input
                class="checkboxList__input"
                type="checkbox"
                :value="nameProduct" 
              />
              <label class="checkboxList__label" :for="nameProduct">{{
                item.nameProduct
              }}</label>
            </li>
          </ul>
        </div>
        <div>
          <input
            class="checkboxList__quantity"
            type="number"
            :value="item.quantity"
          />
        </div>
       
        <div >
          <h3 class="checkboxList__total-price"> Итого:</h3>
         
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        computed: {
    ...mapGetters([
        "checklistForNewborn",
        "itemChecklist",
     
    ]),
    }
}
</script>

<style lang="scss" scoped>

</style>