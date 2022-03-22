<template>
    <select class="categories-select" v-model="filterByCategory" @change="$emit('filter-by-category', this.filterByCategory)">
        <option value="all" selected>הכל</option>
        <option :value="category" v-for="category in categories" :key="category">{{ category }}</option>
    </select>
</template>

<script>
export default {
    name: "CategoriesSelect",
    props: {
        categories: Array,
    },
    data() {
        return {
            filterByCategory: "all",
        };
    },
};
</script>

<style>
.categories-select {
    grid-area: categoriesSelect;
    direction: rtl;
    margin-left: 4rem;
    padding: 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 4px 4px 1px rgb(0, 102, 133);
    border: 1px solid rgb(0, 102, 133);
    border-radius: 8px;
    outline: none;
}
.categories-select:focus {
    transform: scale(1.05);
    box-shadow: 4px 4px 4px rgb(0, 102, 133);
}
@media screen and (max-width: 55rem) {
    .categories-select {
        width: 80%;
        margin: 1rem auto;
        box-shadow: 0px 4px 1px rgb(0, 102, 133);
    }
    .categories-select:focus {
    box-shadow: 0px 4px 4px rgb(0, 102, 133);
}
}
</style>
