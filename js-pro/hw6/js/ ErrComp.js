Vue.component('err', {
    props: ['error'],
    data() {
        return {
            error: ''
        }
    },
    methods: {
    },
    template: `
    <h2>{{error}}</h2>
    `
})