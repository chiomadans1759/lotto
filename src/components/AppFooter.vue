<template>
    <footer class="footer has-cards ">
        <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                  
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2"><img src="/img/icons/common/base-logo.png" class="img-fluid base-logo"></h3>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                   
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
.base-logo {
    width: 40%;
}

.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url('https://source.unsplash.com/BtbjCFUvBXs/1920x1080');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
