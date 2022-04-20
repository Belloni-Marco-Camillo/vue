const app = new Vue({
    // option object
    el: '#app', // el è un elemento 

    data: {
        fName: '',
        lName: '',
        css_class: 'text-red bold' //sono sul foglio css
    }
})

const app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})


const app2 = new Vue({
    el: '#app-2',
    data: {
        counter: 0
    },

    methods: {
        incrementoCounter: function() {
            this.counter += 1
        }
    }

})