let app = new Vue ({
  el: "#my_list",
  data: {
    image: "assets/img/logo.png",
    tasks: [
      "Do something",
      "Do else",
      "Do something else"
    ]
  },
  methods: {
    newTask: {

    },
    erase: function(index) {
      this.tasks.splice(index, 1);
    }
  }
})
