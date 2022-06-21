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
    mouseCoordinates(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruit(fruitName) {
      this.fruitBasket = this.fruitBasket.filter(
        (fruit) => fruit !== fruitName
      );
    },
  },
}).mount("#app");
