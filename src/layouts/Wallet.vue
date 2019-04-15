<template>
  <div id="main"> 
    <!-- Wallet Sidebar -->
    <SideNav/>
    <div class="wallet">
      <div class="page">
        <router-view></router-view>  
      </div>
    </div>
  </div>
</template>

<script>  
import SideNav from "@/components/UserSideNav";
export default {
  name: "components",
  components: { 
    SideNav
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