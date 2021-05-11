Vue.component('search', {
    data() {
        return {
        }
    },
    methods: {
    },
    template: `
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter($root.userSearch)">
            <input type="text" class="search-field" v-model="$root.userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    `
})