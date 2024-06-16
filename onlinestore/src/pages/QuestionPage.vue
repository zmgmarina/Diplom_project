<template>
  <div class="questions-container">
    <div class="questions-container__content">
      <div class="questions-container__content-text">
        Для создания корзины нам хотелось бы учесть все ваши пожелания и
        критерии выбора товаров. Поэтому предлагаем ответить на наши вопросы.
      </div>
      <div class="questions-container__question-box">
        <h2 class="questions-container__question">
          {{ questions[currentQuestionIndex].question }}
        </h2>
        <div class="questions-container__question-answer">
          <ul>
            <li
              class="questions-container__list-option"
              v-for="(option, index) in questions[currentQuestionIndex].options"
              :key="index"
            >
              <input
                class="questions-container__input-option"
                type="radio"
                :id="'option' + index"
                :value="option"
                v-model="selectedOption"
              />
              <label
                class="questions-container__label-option"
                :for="'option' + index"
                >{{ option }}</label
              >
            </li>
          </ul>
        </div>
        <div class="questions-container__button-box">
          <button
            @click="submitAnswer"
            :disabled="accepted"
            class="questions-container__button questions-container__btn-primary"
          >
            Принять ответ
          </button>
          <button
            @click="cancelAnswer(id)"
            :disabled="!accepted"
            class="questions-container__button questions-container__btn-cancel"
            type="submit"
          >
            Отменить ответ
          </button>
        </div>
        <div class="questions-container__result-box">
          <div
            v-for="option in selectedOptions"
            :key="option.id"
            class="questions-container__result"
          >
            {{ option.answer }}
          </div>
        </div>
      </div>
      <div class="questions-container__button-nav">
        <button
          @click="showPreviousQuestion"
          v-if="currentQuestionIndex > 0"
          class="questions-container__btn-nav questions-container__btn-prev"
        >
          Предыдущий вопрос
        </button>
        <button
          @click="showNextQuestion"
          v-if="currentQuestionIndex < questions.length - 1"
          class="questions-container__btn-nav questions-container__btn-next"
        >
          Следующий вопрос
        </button>
        <button
          @click="getResult"
          v-if="currentQuestionIndex === questions.length - 1"
          class="questions-container__btn-nav questions-container__btn-result"
        > 
          Сохранить результат
        </button>
        <router-link to="/checklistcart">
        <button v-if="isVisible" class="questions-container__btn-nav questions-container__btn-cart-link">Ваша корзина готова, нажмите кнопку, чтобы перейти в нее</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentQuestionIndex: 0,
      selectedOption: "",
      accepted: false,
      isVisible: false
    };
  },
  methods: {
    showNextQuestion() {
      this.accepted = false;
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = "";
      }
    },
    showPreviousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.selectedOption = "";
      }
    },
    getResult() {
      const size = this.questions.length;
      if (this.selectedOptions.length < size) {
        alert("Пожалуйста, ответьте на все вопросы!");
      }
      else {
        this.isVisible = true;
        return this.selectedOptions;
      }
    },
    //добавляем ответ в selectedOptions
    submitAnswer() {
      if (this.selectedOption) {
        this.selectedOptions.push({
          id: Date.now(), 
          answer: this.selectedOption,
        });
        this.selectedOption = "";
        this.accepted = true;
      }
    },
    cancelAnswer(id) {
      this.selectedOptions = this.selectedOptions.filter(
        (option) => option.id === id);
        this.accepted = false;
        console.log(this.selectedOptions);
    },
  },
  computed: {
    ...mapGetters(['questions', 'selectedOptions', 'selectedOptionsId']),
  },
};
</script>

<style lang="scss" scoped></style>
