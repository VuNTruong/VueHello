import { TodoItem } from "./components/todoItemElement.js";
import { FeedbackForm } from "./components/feedbackFormElement.js";

// Create Vue App
const app = Vue.createApp({
  expose: ["groceryList"],

  // Define child components here
  components: {
    TodoItem,
    FeedbackForm
  },

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
        {
          name: "Soy sauce",
          type: "Spice"
        }
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

  methods: {
    updateItem() {
      console.log("Update item");
    },

    updateFormData(formData) {
      if (formData.name == "") {
        console.log("Name must not be blank");
      } else if (formData.email == "") {
        console.log("Email must not be blank");
      } else if (formData.content == "") {
        console.log("Content must not be blank");
      } else {
        console.log(formData);
      }
    },
  },
});

// The view model (app when get mounted will return view model)
var vm = app.mount("#container");
