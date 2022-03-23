<template>
    <main class="product-details-page">
        <Loader v-if="loading" />
        <div v-else class="product-details">
            <img :src="product.images[0]?.url" alt="" class="product-img" />
            <h1 class="product-title">{{ product.title }}</h1>
            <h2 class="product-price">{{ product.price }}₪</h2>
        </div>
        <form action="https://webhook.site/1fdd5310-8a0c-403e-8017-c408349d492a?" method="post">
            <input type="text" class="form-input" placeholder="Enter your name..." required />
            <input type="text" class="form-input" placeholder="Enter your email..." required />
            <input type="text" class="form-input" placeholder="Enter your phone..." required />
            <button type="submit" class="submit-btn">Submit</button>
        </form>
        <router-link to="/" class="back-btn"> </router-link>
    </main>
</template>

<script>
import Loader from "../components/Loader.vue";
export default {
    components: { Loader },
    data() {
        return {
            product: { images: [] },
            loading: false,
        };
    },
    methods: {
        async fetchProductById(id) {
            try {
                const res = await fetch(
                    "https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08"
                );
                const allProducts = await res.json();
                const product = allProducts.filter((product) => product.id === id)[0];
                this.product = await product;
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            } catch (err) {
                console.log(err);
            }
        },
    },
    async created() {
        this.loading = true;
        this.fetchProductById(this.$route.params.id);
    },
};
</script>

<style scoped>
main {
    display: grid;
    grid-template-areas:
        "productDetails"
        "form";
    justify-items: center;
    /* align-items: center; */
    position: relative;
    height: calc(100vh - 5rem);
}
.product-details {
    display: grid;
    align-content: center;
    grid-template-areas:
        "productImage productTitle"
        "productImage ."
        "productImage productPrice";
    grid-area: productDetails;
    width: 100%;
    margin: 5rem auto 0;
    padding: 3rem 15rem;
    background: #f5f5f5;
}
.product-img {
    grid-area: productImage;
    max-width: 200px;
    max-height: 200px;
    margin: 0 3rem 0 0;
}
.product-title {
    grid-area: productTitle;
    direction: rtl;
    font-size: 2.25rem;
    text-shadow: 1px 1px 1px #9a9a9a;
}
.product-price {
    grid-area: productPrice;
    direction: rtl;
    margin-bottom: 0;
}
form {
    grid-area: form;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 100%;
    height: 100%;
}
.form-input {
    margin: 0.5rem 0;
    padding: 0.75rem;
    min-width: 40%;
    font-size: 1rem;
    box-shadow: -4px 4px 1px rgb(0, 102, 133);
    border: 1px solid rgb(0, 102, 133);
    border-radius: 8px;
    outline: none;
}
.form-input:focus {
    transform: scale(1.05);
    box-shadow: -4px 4px 4px rgb(0, 102, 133);
}
.submit-btn {
    margin-top: 2rem;
    padding: 1rem 2rem;
    min-width: 40%;
    border: none;
    box-shadow: rgb(134, 146, 150) 0px 3px 8px;
    border-radius: 8px;
    font-size: 1.25rem;
    font-weight: bold;
    background: rgb(178, 237, 255);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.submit-btn:hover {
    background: rgb(43, 85, 97);
    color: white;
}
.back-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    height: calc(100vh - 5rem);
    padding: 0 1rem;
    background: rgb(0, 132, 172);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 0.2s ease-in-out;
}
.back-btn::before {
    content: "\27A5";
    transform: scale(-1, 1);
    font-size: 2rem;
    color: #eee;
}
.back-btn:hover {
    padding: 0 1.25rem;
    box-shadow: rgba(20, 30, 41, 0.336) 10px 0px 10px, rgba(160, 160, 160, 0.23) 20px 0px 20px;
    justify-items: flex-end;
    background: rgb(0, 102, 133);
    color: white;
}
@media screen and (max-width: 57rem) {
    .product-details {
        padding-right: 10rem;
    }
}
@media screen and (max-width: 53rem) {
    .product-details {
        grid-template-areas:
        "productImage"
        "productTitle"
        "productPrice";
        align-items: center;
        margin-top: 2rem;
        padding: 2rem;
        border-radius: 0;
        text-align: center;
    }
    .product-img {
        margin: auto;
    }
    .form-input {
        min-width: 80%;
    }
    .back-btn {
        position: static;
        width: 100%;
        margin-top: 2rem;
        height: auto;
        border-radius: 0;
    }
}
</style>
