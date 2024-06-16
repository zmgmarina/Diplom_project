import { createStore } from 'vuex'

export default createStore({
  state: {
    
    selectedOptions: [],

    filteredProducts: [],
    
    questions: [
      {
        id: 1,
        question: "1. Выберите пол малыша",
        options: ["Девочка", "Мальчик", "Девочка и мальчик"],
      },
      {
        id: 2,
        question: "2. Выберите рост вашего ребенка (см)",
        options: ["56", "62", "68", "74", "80", "86"],
      },
      {
        id: 3,
        question: "3. Укажите вес вашего ребенка (кг)",
        options: ["3-6", "6-9", "9-12"],
      },
    ],
    
    products: [
      {
        id: 1,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image:  require("@/assets/image/body1.jpg"),
        size: [56, 62, 74, 80, 86],
        color: 'белый',
        rating: 4.9,
        reviews: 152
      },
      {
        id: 2,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image:  require("@/assets/image/body2.jpg"),
        size: [62, 74, 80],
        color: 'серый',
        rating: 4.8,
        reviews: 122
      },
      {
        id: 3,
        name: "Подгузники",
        category: "Купание/уход",
        price: 1200,
        image: require("@/assets/image/diaper1.jpg"),
        size:  ["3-6", "6-9", "9-12"],
        rating: 4.8,
        reviews: 87
      },
      {
        id: 4,
        name: "Подгузники",
        category: "Купание/уход",
        price: 2000,
        image:  require("@/assets/image/diaper2.jpg"),
        size:  ["3-6", "6-9", "9-12"],
        rating: 5,
        reviews: 91
      },
      {
        id: 5,
        name: "Бутылочка для кормления",
        category: "Кормление",
        price: 500,
        image:  require("@/assets/image/bottle.jpg"),
        rating: 4.9,
        reviews: 152
      },
      {
        id: 6,
        name: "Бутылочка для кормления",
        category: "Кормление",
        price: 700,
        image:  require("@/assets/image/bottle2.jpeg"),
        rating: 4.7,
        reviews: 211
      },
      {
        id: 7,
        name: "Детская пеленка",
        category: "Постельные принадлежности",
        gender: "Мальчик",
        price: 400,
        image: require("@/assets/image/pelenka1.jpg"),
        color: 'голубой',
        rating: 4.8,
        reviews: 402
      },
      {
        id: 8,
        name: "Детская пеленка",
        category: "Постельные принадлежности",
        gender: "Девочка",
        price: 400,
        image:  require("@/assets/image/pelenka_2.jpg"),
        color: 'розовый',
        rating: 4.6,
        reviews: 95
      },
      {
        id: 9,
        name: "Игрушка",
        category: "Игрушка",
        price: 1000,
        image:  require("@/assets/image/toy1.jpg"),
        rating: 4.9,
        reviews: 152
      },
      {
        id: 10,
        name: "Набор посуды",
        category: "Кормление",
        price: 1100,
        image:  require("@/assets/image/bottle2.jpeg"),
        rating: 4.7,
        reviews: 211
      },
      {
        id: 11,
        name: "Плед",
        category: "Постельные принадлежности",
        gender: "Мальчик",
        price: 1500,
        image: require("@/assets/image/pled2.jpeg"),
        color: 'голубой',
        rating: 4.8,
        reviews: 402
      },
      {
        id: 12,
        name: "Плед",
        category: "Постельные принадлежности",
        gender: "Девочка",
        price: 1600,
        image:  require("@/assets/image/pled1.jpeg"),
        color: 'розовый',
        rating: 4.6,
        reviews: 95
      },
    ],

    linksCatalog: [
      {
        id: 1,
        category: "Детская одежда",
      },
      {
        id: 2,
        category: "Детская обувь",
      },
      {
        id: 3,
        category: "Товары для мамы",
      },
      {
        id: 4,
        category: "Постельные принадлежности",
      },
      {
        id: 5,
        category: "Детская косметика",
      },
      {
        id: 6,
        category: "Игрушки",
      },
      {
        id: 7,
        category: "Купание/уход",
      },
       {
        id: 8,
        category: "Кормление",
      },
      {
        id: 9,
        category: "Детская мебель",
      },
      {
        id: 10,
        category: "NEW",
      },
      {
        id: 11,
        category: "SALE",
      },
    ],

    checklistForNewborn: [
      {
        id: 1,
        nameProduct: 'Распашонки с длинным рукавом',
        quantity: 5
      },
      {
        id: 2,
        nameProduct: 'Распашонки с коротким рукавом',
        quantity: 5
      },
      {
        id: 3,
        nameProduct: 'Штаны хлопчатобумажные',
        quantity: 8
      },
      {
        id: 4,
        nameProduct: 'Боди',
        quantity: 5
      },
      {
        id: 5,
        nameProduct: 'Шапочка',
        quantity: 3
      },
      {
        id: 6,
        nameProduct: 'Носки',
        quantity: 4
      },
      {
        id: 7,
        nameProduct: 'Конверт теплый',
        quantity: 1
      },
      {
        id: 8,
        nameProduct: 'Конверт демисезонный',
        quantity: 1
      },
      {
        id: 9,
        nameProduct: 'Ванночка',
        quantity: 1
      },
      {
        id: 10,
        nameProduct: 'Детский шампунь',
        quantity: 1
      },
      {
        id: 11,
        nameProduct: 'Влажные салфетки',
        quantity: 2
      },
      {
        id: 12,
        nameProduct: 'Махровое полотенце',
        quantity: 2
      },
      {
        id: 13,
        nameProduct: 'Крем под подгузник',
        quantity: 1
      },
      {
        id: 14,
        nameProduct: 'Термометр для воды',
        quantity: 1
      },
      {
        id: 15,
        nameProduct: 'Термометр для тела',
        quantity: 1
      },
      {
        id: 16,
        nameProduct: 'Пелёнка тонкая',
        quantity: 10
      },
      {
        id: 17,
        nameProduct: 'Пелёнка байковая',
        quantity: 5
      },
      {
        id: 17,
        nameProduct: 'Погремушка',
        quantity: 2
      }
  ]
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    
    selectedOptions(state) {
      return state.selectedOptions;
    },
    
    selectedOptionsId(state) {
      return state.selectedOptions.forEach(item => item.id);;
    },

    products(state) {
      return state.products;
    },

    linksCatalog(state) {
      return state.linksCatalog;
    },

    checklistForNewborn(state) {
      return state.checklistForNewborn;
    },

    filteredProducts(state) {
      return state.filteredProducts;
    },
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
