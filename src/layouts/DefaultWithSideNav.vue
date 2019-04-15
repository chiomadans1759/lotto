<template>
    <div class="main">
    <!-- Sidebar -->
   <SideNav/>

    <div id="content">
      <!-- Header -->
      <div class="header">Header goes here</div>

      <div class="page-title mt-4 mb-4">Title of Page goes here</div>

      <div class="page">
        <router-view></router-view>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex iste rerum 
        harum dolorum praesentium laboriosam unde delectus sed, iusto hic modi neque consectetur 
        veritatis cupiditate minus, consequuntur earum corporis distinctio!
        
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
.main{
  background: #f4f4f4;
}
#content{
  width: 100%;
  margin-left: 329px;
  /* background:red; */
  height: 100vh;
}
.header{
  background: #fff;
}
.page-title{
  background: transparent;
}
.page{
  background: #fff;
  width: 71%;
}


</style>
