let app = new Vue ({
  el: "#my_list",
  data: {
    image: "assets/img/logo.png",
    message: "",
    tasks: [
      "Do something",
      "Do else",
      "Do something else"
    ]
  },
  methods: {
    addNewTask: function () {
      this.tasks.push(this.message);
    },
    erase: function(index) {
      this.tasks.splice(index, 1);
    }
  }
})
