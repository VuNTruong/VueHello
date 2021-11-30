// Create Vue App
const app = Vue.createApp({
  data() {
    return {
      // Array of items that are already in cart
      cart: [
        {
          name: "Broccoli",
          type: "Vegetables",
        },
        {
          name: "Cauli flower",
          type: "Vegetables",
        },
        {
          name: "Cheese",
          type: "Dairy",
        },
      ],

      // Array of planned shopping categories
      groceryList: [
        { id: 0, text: "Dairy", buttonDisable: false },
        { id: 1, text: "Vegetables", buttonDisable: false },
        {
          id: 2,
          text: "Spice",
          buttonDisable: false,
        },
      ],
    };
  },

  // This created is used to run code after an instance is created
  created() {
    console.log(this.groceryList);
  },

  methods: {
    receiveFormData(formData) {
      console.log(formData);
    },
  },
});

// Define "todo-item" component for the app here
app.component("todo-item", {
  data() {
    return {
      // The counter variable
      counter: 1,
    };
  },

  // To do is passed as props here
  props: {
    todo: Object,
    shoppingCart: Array,
  },

  // Methods of this component
  methods: {
    // The function to increase counter
    addCounter() {
      this.counter++;
    },

    // The function to decrease counter
    minusCounter() {
      this.counter--;
    },
  },

  // Computed properties (used to compute complex things before rendering them out)
  computed: {
    // The function to check if current category has anything yet or not
    checkCart() {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.todo.text == this.shoppingCart[i].type) {
          return "Already bought groceries in this category";
        }
      }
      return "No groceries of this category yet";
    },

    // The function to get list of groceries in a specified category
    getListOfGroceriesInCurrentCategory() {
      // Array of groceries that are in a current category
      var groceriesInCurrentCategory = [];

      this.shoppingCart.forEach((item) => {
        if (this.todo.text == item.type) {
          groceriesInCurrentCategory.push(item.name);
        }
      });

      // Return the array of groceries in current category
      return groceriesInCurrentCategory;
    },
  },

  // Watch for changes in variables
  watch: {
    counter(newCounterValue, oldCounterValue) {
      if (newCounterValue < oldCounterValue) {
        console.log("Counter is decreased");
      } else {
        console.log("Counter is increased");
      }
    },
  },

  // Template of the component
  template: `
  <div class="container__item">
    <p class="container__item__title">{{todo.text}}</p>

    <h5>{{checkCart}}</h5>

    <p>Current counter {{this.counter}}</p>

    <p>Current groceries of this category</p>
    <ol>
      <li v-for="item in getListOfGroceriesInCurrentCategory">{{item}}</li>
    </ol>

    <button v-bind:disabled=todo.buttonDisable v-on:click=addCounter class="container__item__button">Add counter</button>
    <button v-bind:disabled=todo.buttonDisable v-on:click=minusCounter class="container__item__button">Minus counter</button>
    <br /><br />
  </div>
  `,
});

// Define feedback from component of the app here
app.component("feedback-form", {
  data() {
    return { name: "", email: "", content: "" };
  },

  methods: {
    sendForm() {
      this.$emit("send-form", {
        name: this.name,
        email: this.email,
        content: this.content,
      });
    },
  },

  template: `
  <form id="feedback-form" class="container__feedback-form" @submit.prevent @submit="sendForm">
    <h3 style="text-align: center;">Feedback</h3>
    <div class="container__feedback-form__feedback-item">
      <label
        class="container__feedback-form__feedback-item__label"
        for="name"
        >Name</label
      >
      <input
        class="container__feedback-form__feedback-item__input"
        type="text"
        id="name"
        name="name"
        v-model="name"
      />
    </div>

    <div class="container__feedback-form__feedback-item">
      <label
        class="container__feedback-form__feedback-item__label"
        for="email"
        >Email</label
      >
      <input
        class="container__feedback-form__feedback-item__input"
        type="text"
        id="email"
        name="email"
        v-model="email"
      />
    </div>

    <div class="container__feedback-form__feedback-item">
      <label
        class="container__feedback-form__feedback-item__label"
        for="content"
        >Content</label
      >
      <input
        class="container__feedback-form__feedback-item__input container__feedback-form__feedback-item__input--high"
        type="text"
        id="content"
        name="content"
        v-model="content"
      />
    </div>
    <input class="container__feedback-form__submit-button" type="submit">
  </form>
  `,
});

// The view model (app when get mounted will return view model)
var vm = app.mount("#container");
console.log(vm);
