<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#">
                        <img src="img/brand/logo.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item px-0">
                     <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                      Home
                    </router-link>         
                </li>
               
                <li class="nav-item px-0">
                     <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                      Media 
                    </router-link>         
                </li>
                <li class="nav-item px-0  navbar-nav-hover align-items-lg-center">
                </li> 
                <li class="nav-item px-0 navbar-nav-hover align-items-lg-center">
                    <router-link to="/login">
                    <button type="button" class="btn" data-toggle="modal" data-target="#login">Login</button>
                    </router-link>
                </li>
            </ul>
        </base-nav>
        
    </header>
    
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
  }
};
</script>

<style scoped>
button {
	color:  white;
	background-color: #269A4C;
}
</style>
