Vue.createApp({
    data() {
        return {
            inputTodo: "",
            todos: [
                { title: "Learn Vue", isDone: false },
                { title: "Learn HTML", isDone: true },
            ],
        };
    },
}).mount("#app");