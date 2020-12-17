let app = new Vue ({
  el: "#my_list",
  data: {
    image: "assets/img/logo.png",
    // L'utente puó inserire nuove tasks
    message: "",
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
      this.tasks.push(this.message);
    },
    // Cliccando sulla "X" l'utente puó cancellare una task
    erase: function(index) {
      this.tasks.splice(index, 1);
    }
  }
})
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
