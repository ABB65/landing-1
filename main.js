var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      formState: false,
      form: {
        name:null,
        phone:null,
        email:null,
        message:null
      }
    },
    methods: {
      sendForm() {
        console.log(this.form)
      }
    }

  })