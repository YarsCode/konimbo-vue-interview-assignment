<template>
    <input
        type="text"
        placeholder="חיפוש..."
        v-model="searchByValue"
        @input="$store.commit('searchByValue', this.searchByValue)"
        class="search-input"
    />
</template>

<script>
export default {
    name: "Search",
    props: {
        isBeingFiltered: Boolean,
    },
    data() {
        return {
            searchByValue: this.searchByValue,
        };
    },
    methods: {
        clearSearchIfBeingFiltered() {
            if (this.isBeingFiltered) this.searchByValue = "";
        },
    },
    watch: {
        isBeingFiltered: {
            handler() {
                this.clearSearchIfBeingFiltered();
            },
            immediate: true,
        },
    },
    emits: ["search-value"],
};
</script>

<style>
.search-input {
    grid-area: search;
    display: flex;
    justify-content: center;
    direction: rtl;
    padding: 0.75rem;
    font-size: 1rem;
    box-shadow: -4px 4px 1px rgb(0, 102, 133);
    border: 1px solid rgb(0, 102, 133);
    border-radius: 8px;
    outline: none;
}
.search-input:focus {
    transform: scale(1.05);
    box-shadow: -4px 4px 4px rgb(0, 102, 133);
}
.search-btn {
    margin: 0 0.5rem;
}
@media screen and (max-width: 55rem) {
    .search-input {
        width: 80%;
        margin: 1rem auto;
        box-shadow: 0px -4px 1px rgb(0, 102, 133);
    }
    .search-input:focus {
        box-shadow: 0px -4px 4px rgb(0, 102, 133);
    }
}
</style>
