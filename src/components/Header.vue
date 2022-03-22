<template>
    <header class="main-header">
        <div class="store-name-container">
            <h1 class="header-store-name">{{ storeName }}</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        storeName: String,
    },
};
</script>

<style scoped>
.main-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background: #eeeeee;
    box-shadow: 0px 1px 10px 0px rgb(158, 157, 157);
}

.store-name-container {
    display: flex;
    width: 80%;
}

.header-store-name {
    margin: 0;
    font-size: 2.5rem;
    color: rgb(50, 50, 50);
    text-shadow: 1px 1px 1px rgb(158, 157, 157);
}
.header-store-name::first-letter {
    color: rgb(0, 102, 133);
}
</style>
