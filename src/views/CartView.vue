<template>
  <NavBar />
  <SinglePageHeaderVue />
  <PageCart />
  <AppFooter />
</template>

<script>
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import SinglePageHeaderVue from "@/components/User/cart/SinglePageHeader.vue";
import PageCart from "@/components/User/cart/PageCart.vue";

export default {
  name: "CartView",
  components: {
    NavBar,
    AppFooter,
    SinglePageHeaderVue,
    PageCart,
  },
};
</script>

<style></style>
