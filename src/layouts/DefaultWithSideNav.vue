<template>
<div id="main">
    <!-- Sidebar -->
   <SideNav/>

    <div id="content">
      <!-- Header -->
      <div class="header">Header goes here</div>

      <div class="page">
        <router-view></router-view>     
      </div>
        <!-- <Footer/> -->
    </div>

</div>
</template>

<script>
import Header from "@/components/AppHeader";
import Footer from "@/components/AppFooter";
import SideNav from "@/components/PlaySideNav";
export default {
  name: "components",
  components: {
    Header,
    Footer,
    SideNav
  }
};
</script>
<style scoped>
#main{
  background: #E5E5E5;
  height: 100vh;
  /* overflow-y: scroll; */
}
#main #content{
  width: 100%;
  margin-left: 310px;
  height: 100vh;
  overflow-y: scroll;
}
#main .header{
  background: #fff;
}
#main .page-title{
  background: transparent;
}
#main .page{
  background: #fff;
  width: 75%;
  overflow-y: scroll;
}


</style>
