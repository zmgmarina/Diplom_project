import { createStore } from "vuex";

export default createStore({
  state: {
    selectedOptions: [],
    cart: [],
    

    questions: [
      {
        id: 1,
        question: "1. Выберите пол малыша",
        options: ["Девочка", "Мальчик"],
      },
      {
        id: 2,
        question: "2. Выберите рост вашего ребенка (см)",
        options: [56, 62, 68, 74, 80, 86],
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
        image: require("@/assets/image/body1.jpg"),
        height: 80,
        color: "белый",
        rating: 4.9,
        reviewsCount: 152,
      },
      {
        id: 2,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 62,
        color: "серый",
        rating: 4.9,
        reviewsCount: 122,
        reviews: ["Хороший боди", "Супер!"],
       
      },
      {
        id: 3,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image: require("@/assets/image/body3.jpg"),
        height: 68,
        color: "белый",
        rating: 4.9,
        reviewsCount: 252,
      },
      {
        id: 4,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image: require("@/assets/image/body4.jpg"),
        height: 70,
        color: "белый",
        rating: 4.8,
        reviewsCount: 350,
      },
      {
        id: 5,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image: require("@/assets/image/body1.jpg"),
        height: 74,
        color: "белый",
        rating: 4.9,
        reviewsCount: 152,
       
      },
      {
        id: 6,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body3.jpg"),
        height: 68,
        color: "серый",
        rating: 4.9,
        reviewsCount: 422,
      },
      {
        id: 7,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 74,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
        
      },
      {
        id: 8,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 80,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
      },

      {
        id: 9,
        name: "Распашонка",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 80,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
        
      },
      {
        id: 10,
        name: "Распашонка с длинным рукавом",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 68,
        color: "серый",
        rating: 4.8,
        reviewsCount: 222,
        
      },

      {
        id: 11,
        name: "Распашонка с длинным рукавом",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 86,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
        
      },
      {
        id: 12,
        name: "Распашонка с длинным рукавом",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 62,
        color: "серый",
        rating: 4.9,
        reviewsCount: 158,
        reviews: ["Отличный товар", "Супер, берите не пожалеете!"],
      },
      {
        id: 13,
        name: "Распашонка с коротким рукавом",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 80,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
        
      },
      {
        id: 14,
        name: "Распашонка с коротким рукавом",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 70,
        color: "серый",
        rating: 4.9,
        reviewsCount: 122,
      },

      {
        id: 15,
        name: "Распашонка с коротким рукавом",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 70,
        color: "серый",
        rating: 4.8,
        reviewsCount: 226,
       
      },
      {
        id: 16,
        name: "Распашонка с коротким рукавом",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 74,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
      },
      {
        id: 17,
        name: "Штаны хлопчатобумажные",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 68,
        color: "серый",
        rating: 4.9,
        reviewsCount: 122,
      },
      {
        id: 18,
        name: "Штаны хлопчатобумажные",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 70,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
        
      },

      {
        id: 19,
        name: "Штаны хлопчатобумажные",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 74,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
        
      },
      {
        id: 20,
        name: "Ползунки",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 68,
        color: "серый",
        rating: 4.8,
        reviewsCount: 152,
        
      },

      {
        id: 21,
        name: "Ползунки",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 70,
        color: "серый",
        rating: 4.8,
        reviewsCount: 52,
        
      },

      {
        id: 22,
        name: "Подгузники",
        category: "Купание/уход",
        price: 1200,
        image: require("@/assets/image/diaper1.jpg"),
        weight: "3-6",
        rating: 4.8,
        reviewsCount: 87,
       
      },
      {
        id: 23,
        name: "Подгузники",
        category: "Купание/уход",
        price: 2000,
        image: require("@/assets/image/diaper2.jpg"),
        weight: "6-9",
        rating: 5,
        reviewsCount: 91,
       
      },
      {
        id: 24,
        name: "Бутылочка для кормления",
        category: "Кормление",
        price: 500,
        image: require("@/assets/image/bottle.jpg"),
        rating: 4.9,
        reviewsCount: 152,
        
      },
      {
        id: 24,
        name: "Бутылочка для кормления",
        category: "Кормление",
        price: 700,
        image: require("@/assets/image/bottle2.jpeg"),
        rating: 4.7,
        reviewsCount: 211,
       
      },
      {
        id: 25,
        name: "Детская пеленка",
        category: "Постельные принадлежности",
        gender: "Мальчик",
        price: 400,
        image: require("@/assets/image/pelenka1.jpg"),
        color: "голубой",
        rating: 4.8,
        reviewsCount: 402,
        
      },
      {
        id: 26,
        name: "Детская пеленка",
        category: "Постельные принадлежности",
        gender: "Девочка",
        price: 400,
        image: require("@/assets/image/pelenka_2.jpg"),
        color: "розовый",
        rating: 4.6,
        reviewsCount: 95,
       
      },
      {
        id: 27,
        name: "Игрушка",
        category: "Игрушка",
        price: 1000,
        image: require("@/assets/image/toy1.jpg"),
        reviewsCount: 4.9,
        
      },
      {
        id: 28,
        name: "Набор посуды",
        category: "Кормление",
        price: 1100,
        image: require("@/assets/image/bottle2.jpeg"),
        rating: 4.7,
        reviewsCount: 211,
       
      },
      {
        id: 29,
        name: "Плед",
        category: "Постельные принадлежности",
        gender: "Мальчик",
        price: 1500,
        image: require("@/assets/image/pled2.jpeg"),
        color: "голубой",
        rating: 4.8,
        reviewsCount: 402,
        
      },
      {
        id: 30,
        name: "Плед",
        category: "Постельные принадлежности",
        gender: "Девочка",
        price: 1600,
        image: require("@/assets/image/pled1.jpeg"),
        color: "розовый",
        rating: 4.6,
        reviewsCount: 95,
       
      },
    ],

    catalogBody: [
      {
        id: 1,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image: require("@/assets/image/body1.jpg"),
        height: 80,
        color: "белый",
        rating: 4.9,
        reviewsCount: 152,
      },
      {
        id: 2,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 62,
        color: "серый",
        rating: 4.9,
        reviewsCount: 122,
        reviews: ["Хороший боди", "Супер!"],
       
      },
      {
        id: 3,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image: require("@/assets/image/body1.jpg"),
        height: 68,
        color: "белый",
        rating: 4.9,
        reviewsCount: 252,
      },
      {
        id: 4,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image: require("@/assets/image/body1.jpg"),
        height: 70,
        color: "белый",
        rating: 4.8,
        reviewsCount: 350,
      },
      {
        id: 5,
        name: "Боди",
        category: "Детская одежда",
        gender: "Мальчик",
        price: 1000,
        image: require("@/assets/image/body1.jpg"),
        height: 74,
        color: "белый",
        rating: 4.9,
        reviewsCount: 152,
       
      },
      {
        id: 6,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body3.jpg"),
        height: 68,
        color: "серый",
        rating: 4.9,
        reviewsCount: 422,
      },
      {
        id: 7,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 74,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
        
      },
      {
        id: 8,
        name: "Боди",
        category: "Детская одежда",
        gender: "Девочка",
        price: 900,
        image: require("@/assets/image/body2.jpg"),
        height: 80,
        color: "серый",
        rating: 4.8,
        reviewsCount: 122,
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
        category: "NEW",
      },
      {
        id: 10,
        category: "SALE",
      },
    ],

    links: [
      { id: 1,
        itemlinks: ['Распашонки', 'Ползунки','Боди', 'Носки', 'Рубашки', 'Шапочки']
      },
      { id: 2,
        itemlinks: ['Пинетки', 'Сапожки','Ботинки', 'Носки']
      },
       
    ],

    checklistForNewborn: [
      {
        id: 1,
        nameProduct: "Боди",
        quantity: 5,
      },
      {
        id: 2,
        nameProduct: "Распашонка с коротким рукавом",
        quantity: 5,
      },
      {
        id: 3,
        nameProduct: "Распашонка с длинным рукавом",
        quantity: 8,
      },
      {
        id: 4,
        nameProduct: "Штаны хлопчатобумажные",
        quantity: 5,
      },
      {
        id: 5,
        nameProduct: "Ползунки",
        quantity: 3,
      },
      {
        id: 6,
        nameProduct: "Носки",
        quantity: 4,
      },
      {
        id: 7,
        nameProduct: "Конверт теплый",
        quantity: 1,
      },
      {
        id: 8,
        nameProduct: "Конверт демисезонный",
        quantity: 1,
      },
      {
        id: 9,
        nameProduct: "Ванночка",
        quantity: 1,
      },
      {
        id: 10,
        nameProduct: "Детский шампунь",
        quantity: 1,
      },
      {
        id: 11,
        nameProduct: "Влажные салфетки",
        quantity: 2,
      },
      {
        id: 12,
        nameProduct: "Махровое полотенце",
        quantity: 2,
      },
      {
        id: 13,
        nameProduct: "Крем под подгузник",
        quantity: 1,
      },
      {
        id: 14,
        nameProduct: "Термометр для воды",
        quantity: 1,
      },
      {
        id: 15,
        nameProduct: "Термометр для тела",
        quantity: 1,
      },
      {
        id: 16,
        nameProduct: "Пелёнка тонкая",
        quantity: 10,
      },
      {
        id: 17,
        nameProduct: "Пелёнка байковая",
        quantity: 5,
      },
      {
        id: 17,
        nameProduct: "Подгузники",
        quantity: 2,
      },
    ],
  },
  getters: {
    questions(state) {
      return state.questions;
    },

    selectedOptions(state) {
      return state.selectedOptions;
    },

    selectedOptionsId(state) {
      return state.selectedOptions.forEach((item) => item.id);
    },

    products(state) {
      return state.products;
    },

    linksCatalog(state) {
      return state.linksCatalog;
    },
    
    links(state) {
      return state.links;
    },
    checklistForNewborn(state) {
      return state.checklistForNewborn;
    },

    itemChecklist(state) {
      return state.checklistForNewborn.forEach(
        (itemChecklist) => itemChecklist
      );
    },

    filteredProducts(state) {
      return state.filteredProducts;
    },

     cart(state) {
      return state.cart;
  },
    
    catalogBody(state) {
      return state.catalogBody;
  },
},
  mutations: {
    
  },
  actions: {},
  modules: {},
});
