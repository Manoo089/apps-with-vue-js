Vue.createApp({
    data() {
        return {
            x: 12,
            y: 4,
            fruitBasket: [
                "🍏 Apple",
                "🍌 Banana",
                "🍉 Melon",
                "🫐 Blueberry",
                "🍓 Strawberry",
                "🍍 Ananas",
                "🥭 Mango",
            ],
        };
    },
    methods: {
        mouseMove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        removeItem(removeFruit) {
            this.fruitBasket = this.fruitBasket.filter((fruit) => {
                return fruit !== removeFruit;
            });
        },
    },
}).mount("#app");