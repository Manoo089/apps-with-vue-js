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
    methods: {
        addTodo() {
            if (this.inputTodo === "") {
                alert("Du hast keine Eingabe gemacht!");
            } else {
                const newTodo = { title: this.inputTodo, isDone: false };
                this.todos.push(newTodo);
                this.inputTodo = "";
            }
        },
        deleteTodo(removeTodo) {
            this.todos = this.todos.filter((todo) => {
                return todo !== removeTodo;
            });
        },
        deleteAllTodos() {
            console.log("gelöscht");
        },
    },
    computed: {
        isTodoPresent() {
            return this.todos.length === 0;
        },
        isEmpty() {
            return this.inputTodo === "";
        },
    },
}).mount("#app");