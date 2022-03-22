<script>
import Header from "./components/Header.vue";
export default {
    components: {
        Header,
    },
};
</script>

<template>
    <Header storeName="GadgetStore" />
    <router-view></router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap");
* {
    box-sizing: border-box;
}
body {
    font-family: "Rubik", sans-serif;
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>
