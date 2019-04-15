<template>
  <div class="main">
    <Header/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/AppHeader";
import Footer from "@/components/AppFooter";
export default {
  name: "components",
  components: {
    Header,
    Footer 
  }
};
</script>
