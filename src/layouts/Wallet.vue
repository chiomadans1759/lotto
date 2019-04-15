<template>
  <div id="main"> 
    <!-- Wallet Sidebar -->
    <user-side-nav/>
    <div class="wallet">
      <div class="page">
        <router-view></router-view>  
      </div>
    </div>
  </div>
</template>

<script>  
import UserSideNav from "@/components/sidenavs/UserSideNav";
export default {
  name: "components",
  components: { 
    UserSideNav
  }
};
</script>

<style>
#main .wallet{
  width: 100%;
  margin-left: 300px;
  height: 100vh;
  overflow-y: scroll;
}
#main .page{
  background: #fff;
  width: 76.5%;
  overflow-y: scroll;
}
</style>