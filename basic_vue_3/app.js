const app = Vue.createApp({
    data() {
        return {
            name: 'Dragos',
            age: 39,
            path: './tool.JPG'
        };
    },
    methods: {
        ageInFive() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        },
        defaultInputValue() {
            return this.name
        }
    }
});

app.mount('#assignment');