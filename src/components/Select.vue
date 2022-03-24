<template>
    <select v-model="filterBy" @change="$store.commit('filterBy', this.filterBy)">
        <option value="all" selected>הכל</option>
        <option :value="option" v-for="option in options" :key="option">{{ option }}</option>
    </select>
</template>

<script>
export default {
    name: "Select",
    props: {
        options: Array,
    },
    data() {
        return {
            filterBy: "all",
        };
    },
};
</script>

<style>
select {
    grid-area: select;
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
select:focus {
    transform: scale(1.05);
    box-shadow: 4px 4px 4px rgb(0, 102, 133);
}
@media screen and (max-width: 55rem) {
    select {
        width: 80%;
        margin: 1rem auto;
        box-shadow: 0px 4px 1px rgb(0, 102, 133);
    }
    select:focus {
        box-shadow: 0px 4px 4px rgb(0, 102, 133);
    }
}
</style>
