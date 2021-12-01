import {FormChild} from "./formChildElement.js";  

export let FeedbackForm = {
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

  components: {
    FormChild,
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

        <form-child></form-child>
      </form>
      `,
};