<template>
    <main>
        <Search @search-value="searchByValue" :isBeingFiltered="isBeingFiltered" />
        <CategoriesSelect :categories="availableCategories" @filter-by-category="filterByCategory" />
        <div v-if="loading" class="loader-container">
            <Loader />
        </div>
        <ProductsList v-else :products="productsToDisplay" />
    </main>
</template>

<script>
import Search from "../components/Search.vue";
import CategoriesSelect from "../components/CategoriesSelect.vue";
import ProductsList from "../components/ProductsList.vue";
import Loader from "../components/Loader.vue";
export default {
    components: {
        Search,
        CategoriesSelect,
        ProductsList,
        Loader,
    },
    data() {
        return {
            filteredProducts: [],
            productsToDisplay: [],
            availableCategories: [],
            isBeingFiltered: false,
            loading: false,
        };
    },
    methods: {
        async fetchProducts() {
            try {
                const res = await fetch(
                    "https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08"
                );
                const products = await res.json();
                this.products = await products;
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            } catch (err) {
                console.log(err);
            }
        },
        getAvailableCategories() {
            const availableCategories = [...new Set(this.products.map((product) => product.store_category_title))]; // Removes all duplicates from the categories.
            this.availableCategories = availableCategories
        },
        searchByValue(value) {
            if (this.filteredProducts.length > 0) {
                const productsToDisplay = this.filteredProducts.filter((product) =>
                    product.title.toLowerCase().includes(value.toLowerCase())
                );
                this.productsToDisplay = productsToDisplay;
            }
        },
        filterByCategory(category) {
            if (category !== "all") {
                // this.productsToDisplay = this.products.filter((product) => product.store_category_title === category);
                this.filteredProducts = this.products.filter((product) => product.store_category_title === category);
                this.productsToDisplay = this.filteredProducts
                this.isBeingFiltered = true;
            } else {
                this.productsToDisplay = this.products;
            }
        },
    },
    async created() {
        this.loading = true;
        await this.fetchProducts();
        this.getAvailableCategories();
        this.productsToDisplay = this.products;
    },
};
</script>

<style scoped>
main {
    display: grid;
    grid-template-areas:
        "search search categoriesSelect"
        "products products products";
    width: 80%;
    margin: 5rem auto;
}
.loader-container {
    display: flex;
    justify-content: center;
    grid-area: products;
}
@media screen and (max-width: 55rem) {
    main {
        grid-template-areas:
        "search"
        "categoriesSelect"
        "products";
        width: 100%;
    }
}
</style>
