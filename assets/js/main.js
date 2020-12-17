let app = new Vue ({
  el: "#my_list",
  data: {
    image: "assets/img/logo.png",
    // L'utente puó inserire nuove tasks
    newTask: "",
    // La nostra todo list avrá alcune tasks di default predefinite
    noTask:"Nulla da fare",
    tasks: [
      "Do something",
      "Do else",
      "Do something else"
    ]
  },
  methods: {
    addNewTask: function () {
      if (this.newTask.length > 3) {
        this.tasks.push(this.newTask);
      }else {
        alert("La parola è troppo corta");
      }
    },
    // Cliccando sulla "X" l'utente puó cancellare una task
    erase: function(index) {
      this.tasks.splice(index, 1);
    }
  }
})

// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
