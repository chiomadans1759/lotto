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
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text navbar-brand mr-lg-5">About Us</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="#"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                    world's most popular framework for building responsive sites.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
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
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>

<style scoped>
button {
	color:  white;
	background-color: #269A4C;
}
</style>
