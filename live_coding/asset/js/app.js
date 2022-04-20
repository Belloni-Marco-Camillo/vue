const app = new Vue({
    el: "#app",
    data: {
        style_color: "red"
    },
    methods: {
        change_color() {
            if (this.style_color == "red") {
                this.style_color = "blue" //coloro la scritta in blue se è rossa
            } else {
                this.style_color = "red" //coloro la scritta in blue se è rossa
            }
        }
    }
})