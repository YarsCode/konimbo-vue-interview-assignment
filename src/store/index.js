import { createStore } from "vuex";

export default createStore({
    state: {
        products: [],
        productsToDisplay: [],
        filteredProducts: [],
        availableCategories: [],
        isBeingFiltered: false,
        loading: false,
    },
    mutations: {
        fetchProducts(state, products) {
            state.products = products;
            state.productsToDisplay = products;
            state.filteredProducts = products;
            state.loading = false;
        },
        initAvailableCategories(state) {
            const availableCategories = [
                ...new Set(this.state.products.map((product) => product.store_category_title)), // Removes all duplicates from the categories.
            ];
            state.availableCategories = availableCategories;
        },
        searchByValue(state, value) {
            state.productsToDisplay = state.filteredProducts.filter((product) =>
                product.title.toLowerCase().includes(value.toLowerCase())
            );
            state.isBeingFiltered = false;
        },
        filterBy(state, category) {
            if (category !== "all") {
                state.filteredProducts = state.products.filter((product) => product.store_category_title === category);
                state.productsToDisplay = state.filteredProducts;
            } else {
                state.filteredProducts = state.products;
                state.productsToDisplay = state.products;
            }

            state.isBeingFiltered = true;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            this.state.loading = true;
            try {
                const res = await fetch(process.env.VUE_APP_API_URL);
                const products = await res.json();
                commit("fetchProducts", products);
            } catch (err) {
                console.log(err);
            }
        },
    },
});
