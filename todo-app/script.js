Vue.createApp({
    data() {
        return {
            inputTodo: "",
            todos: [
                { title: "Learn Vue", isDone: false },
                { title: "Learn HTML", isDone: true },
            ],
            filter: "all",
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
        deleteTodo() {
            this.todos = this.todos.filter((todo) => {
                return !todo.isDone;
            });
        },
    },
    computed: {
        isTodoPresent() {
            return this.todos.length === 0;
        },
        isEmpty() {
            return this.inputTodo === "";
        },
        openTodo() {
            return this.todos.filter((todo) => {
                return todo.isDone === false;
            });
        },
        doneTodo() {
            return this.todos.filter((todo) => {
                return todo.isDone === true;
            });
        },
    },
}).mount("#app");