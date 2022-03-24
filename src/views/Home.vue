<template>
    <main>
        <Search @search-value="$store.commit('searchByValue')" :isBeingFiltered="$store.state.isBeingFiltered" />
        <Select :options="$store.state.availableCategories" @filter-by-category="$store.commit('filterBy')" />
        <div v-if="this.$store.state.loading" class="loader-container">
            <Loader />
        </div>
        <ProductsList v-else :products="$store.state.productsToDisplay" />
    </main>
</template>

<script>
import Search from "../components/Search.vue";
import Select from "../components/Select.vue";
import ProductsList from "../components/ProductsList.vue";
import Loader from "../components/Loader.vue";
export default {
    components: {
        Search,
        Select,
        ProductsList,
        Loader,
    },
    async created() {
        await this.$store.dispatch("fetchProducts");
        this.$store.commit("initAvailableCategories");
    },
};
</script>

<style scoped>
main {
    display: grid;
    grid-template-areas:
        "search search select"
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
            "select"
            "products";
        width: 100%;
    }
}
</style>
