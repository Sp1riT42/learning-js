export default {
    state: {
        products: [],
        filterProducts: [],
        cart: [],
        cartCount: 0
    },
    getters: {
        getAllProducts(state) {
            return state.products
        },
        getFilterProducts(state){
            return state.filterProducts
        },
        getAllCart(state) {
            return state.cart
        },
        getCartCount(state) {
            return state.cartCount
        },
        getSumCart(state) {
            return state.cart.reduce((accum, item) => accum += item.price * item.quantity , 0)
        }
    },
    mutations: {
        setProducts(state, payload){
            state.products = payload
        },
        setFilterProducts(state, payload) {
            state.filterProducts = payload
        },
        setCart(state, payload){
            state.cart = payload
            this.commit('setCartCount', this.getters.getAllCart.length)
        },
        setCartCount(state, payload){
            state.cartCount = payload
        },
        addItemCart(state, product){
                state.cart.push(product)
        }
    },
    actions: {
        fetchProducts(context) {
                return fetch('/api/products')
                    .then(result => result.json())
                    .then(data =>  {
                        context.commit("setProducts", data)
                        context.commit("setFilterProducts", data)
                    })
                    .catch(error => {
                        //this.$refs.error.setError(error);
                    })

        },
        fetchCart(context) {
            return fetch('/api/cart')
                .then(result => result.json())
                .then(data =>  context.commit("setCart", data))
                .catch(error => {
                    //this.$refs.error.setError(error);
                })
        },
        putJson(context, payload) {
            return fetch(payload.url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload.data)
            }).then(result => {
                this.dispatch('fetchCart')
                return result.json()})
                .catch(error => {
                });
        },
        postJson(context, payload) {
            return fetch(payload.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload.data)
            }).then(result => result.json())
                .then(data => {
                    if (data.result === 1) {
                        context.commit('addItemCart', payload.data)
                        context.commit('setCartCount', context.getters.getAllCart.length)
                    }
                })
                .catch(error => {
                    //this.$refs.error.setError(error);
                });
        },
        deleteJson(context, payload) {
            return fetch(payload.url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .then(data => {
                    if(data.result === 1) {
                        if (payload.item.quantity > 1) {
                            this.getAllCart().splice(this.getAllCart.indexOf(payload.item), 1)
                        }
                    }
                })
                .catch(error => {
                    //this.$refs.error.setError(error);
                });
        },
    }

}