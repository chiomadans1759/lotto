<template>
<div id="wallet">
    <!-- Sidebar -->
   <wallet-side-nav/>

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
import WalletSideNav from "@/components/sidenavs/WalletSideNav";
export default {
  name: "components",
  components: {
    Header,
    Footer,
    WalletSideNav
  }
};
</script>
<style scoped>
#wallet{
  background: #E5E5E5;
  height: 100vh;
  /* overflow-y: scroll; */
}
#wallet #content{
  width: 100%;
  margin-left: 310px;
  height: 100vh;
  overflow-y: scroll;
}
#wallet .header{
  background: #fff;
}
#wallet .page-title{
  background: transparent;
}
#wallet .page{
  background: #fff;
  width: 75%;
  overflow-y: scroll;
}

</style>
