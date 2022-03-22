<template>
    <div class="products">
        <Product :product="product" :key="product.id" v-for="product in products" />
    </div>
</template>

<script>
import Product from "./Product.vue";
export default {
    name: "ProductsList",
    props: {
        products: Array,
    },
    components: {
        Product,
    },
};
</script>

<style scoped>
.products {
    grid-area: products;
    display: grid;
    /* justify-items: center; */
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: 4rem auto;
    /* width: 100%; */
}
@media (max-width: 70rem) {
    .products {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 55rem) {
    .products {
        grid-template-columns: 1fr;
        margin: 2rem 0.5rem;
    }
}
</style>
