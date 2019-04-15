<template>
<div id="main">
    <!-- Sidebar -->
   <user-side-nav/>

    <div id="content">
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
import UserSideNav from "@/components/sidenavs/UserSideNav";
export default {
  name: "components",
  components: {
    Header,
    Footer,
    UserSideNav
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
