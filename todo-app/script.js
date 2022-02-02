Vue.createApp({
    data() {
        return {
            inputTodo: "",
            todos: [],
            filter: "all",
        };
    },
    methods: {
        loadTodos() {
            fetch("http://localhost:4730/todos")
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        alert("Da hat was nicht funktioniert!");
                    }
                })
                .then((data) => {
                    this.todos = data;
                });
        },
        addTodo() {
            if (this.inputTodo === "") {
                alert("Du hast keine Eingabe gemacht!");
            } else {
                fetch("http://localhost:4730/todos", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            id: "",
                            description: this.inputTodo,
                            done: false,
                        }),
                    })
                    .then((res) => res.json())
                    .then((newTodo) => {
                        this.todos.push(newTodo);
                    });
                this.inputTodo = "";
            }
        },
        deleteTodo() {
            const doneTodos = [];

            this.todos.forEach((todo) => {
                if (todo.done) {
                    doneTodos.push(
                        fetch("http://localhost:4730/todos/" + todo.id, {
                            method: "DELETE",
                        })
                    );
                }
            });
            Promise.all(doneTodos).then(() => {
                this.loadTodos();
            });
        },
        updateTodo(todo) {
            fetch("http://localhost:4730/todos/" + todo.id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(todo),
                })
                .then((res) => res.json())
                .then((updatedTodo) => {});
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
                return todo.done === false;
            });
        },
        doneTodo() {
            return this.todos.filter((todo) => {
                return todo.done === true;
            });
        },
    },
    created() {
        this.loadTodos();
    },
}).mount("#app");