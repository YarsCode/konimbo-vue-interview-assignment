<template>
    <router-link
        :to="{
            name: 'ProductDetails',
            params: { id: product.id },
        }"
        name="asd"
        class="product"
    >
        <h3>{{ product.title }}</h3>
        <img :src="product.images[0]?.url" alt="" class="product-img" />
        <h4>מחיר: ₪{{ product.price }}</h4>
    </router-link>
</template>

<script>
export default {
    name: "Product",
    props: {
        product: Object,
    },
};
</script>

<style scoped>
.product {
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid rgb(0, 102, 133);
    /* width: 100%; */
    padding: 0.5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
}
.product:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgb(0, 46, 59);
    transition: all 0.1s ease-in-out;
}
.product-img {
    max-width: 150px;
    max-height: 200px;
}
</style>
