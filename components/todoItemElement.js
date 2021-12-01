export let TodoItem = {
  data() {
    return {
      // The priority level variable
      priorityLevel: 1,
    };
  },

  // To do is passed as props here
  props: {
    todo: Object,
    shoppingCart: Array,
  },

  // Methods of this component
  methods: {
    // The function to increase priority level
    addPriorityLevel() {
      this.priorityLevel++;
    },

    // The function to decrease priority level
    minusPriorityLevel() {
      if (this.priorityLevel > 1) {
        this.priorityLevel--;
      } else {
          alert("Already at lowest priority level")
      }
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
    priorityLevel(newPriorityLevelValue, oldPriorityLevelValue) {
      if (newPriorityLevelValue < oldPriorityLevelValue) {
        alert("Priority level is decreased");
      } else {
        alert("Priority level is increased");
      }
    },
  },

  // Template of the component
  template: `
    <div class="container__item">
    <p class="container__item__title">{{todo.text}}</p>

    <h5>{{checkCart}}</h5>

    <p>Current priority level {{this.priorityLevel}}</p>

    <p>Current groceries of this category</p>
    <ol>
        <li v-for="item in getListOfGroceriesInCurrentCategory">{{item}}</li>
    </ol>

    <button v-bind:disabled=todo.buttonDisable v-on:click=addPriorityLevel class="container__item__button">Increase priority level</button>
    <button v-bind:disabled=todo.buttonDisable v-on:click=minusPriorityLevel class="container__item__button">Decrease priority level</button>
    <button v-bind:disabled=todo.buttonDisable v-on:click="$emit('update-item')" class="container__item__button">Update item</button>
    <br /><br />
    </div>
    `,
};
