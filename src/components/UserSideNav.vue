<template>
 <nav id="usersidebar">
        <div class="sidebar-header">
            <span><img class="logo" src="img/brand/logo.png" alt="logo"></span>
        </div>

        <ul class="list-unstyled components">
          <router-link :to="{ name: 'dashboard'}"> 
            <div class="d-flex justify-content-center  align-items-center user-detail">
              <div class="user-name-sign d-flex justify-content-center align-items-center">P</div>
              <div class="d-flex flex-column ml-4">
                <span class="">Pelumi</span>
                <small class="variant-white">070342637819</small>
              </div>
            </div>
          </router-link>
          
            <li class="mt-5">
              <router-link to="/play"> 
               <div class="items d-flex justify-content-between">
                 <div class="indicator"></div>
                 <div class="listing">
                   <i class="fas fa-play"></i>
                   <span class="ml-4">Play</span>
                 </div>
               </div>
              </router-link>
            </li>

            <li class="mt-1">
              <router-link :to="{ name: 'dashboard'}"> 
               <div class="items d-flex justify-content-between">
                 <div class="indicator"></div>
                 <div class="listing">
                   <i class="fas fa-money-check-alt"></i>
                   <span class="ml-4">My Wallet</span>
                 </div>
               </div>
              </router-link>
            </li>

            <li class="mt-1">
              <router-link :to="{ name: 'dashboard-result'}"> 
                <div class="items d-flex justify-content-between">
                  <div class="indicator"></div>
                  <div class="listing">
                    <i class="fas fa-poll"></i>
                    <span class="ml-4">Results</span>
                  </div>
                </div>
              </router-link>
            </li> 
        </ul>
    </nav>
</template>
<script>
export default {
  name: "components",
  mounted(){ 
    var btns = document.getElementsByClassName("items"); 
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activate");
        // If there's no active class
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" activate", "");
        }
        // Add the active class to the current/clicked button
        this.childNodes[0].className += " activate";
      });
    }
  },
  data(){
    return{
      success_toggle: true,
      naira_toggle: true,
      kano_toggle: true,
      naija_gold_toggle: true,
      rich_toggle: true,
      ghana_toggle: true,
      cash_toggle: true,
      winna_toggle: true,
      millim_toggle: true,
    }
  }
}
</script>
<style>
#usersidebar a{
  text-decoration: none;
  color: #fff;
}
#usersidebar a:hover{
  text-decoration: none;
}
#usersidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; 
  top: 0;
  left: 0;
  position:fixed;
  height: 100vh;
  z-index: 999;
  background: url('~/img/theme/side-nav.png');
  background-repeat: repeat;
  color: #fff;
  transition: all 0.3s;
  overflow-x: scroll;
}
#usersidebar .logo{
  width: 75%;
}
#usersidebar .sidebar-header {
    padding: 32px 10px;
    margin-left: 5rem;
}
#usersidebar ul.components {
    border-bottom: 1px solid #47748b;
    width: 100%;
    display: flex;
    flex-direction: column;
}
#usersidebar .user-detail{
  background: #21703A;
  height: 75px;
}
#usersidebar .user-name-sign{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #269A4C;
}
#usersidebar .items{
  height: 65px;
  line-height: 75px;
  font-weight: bold;
  cursor: pointer;
}
#usersidebar .indicator{
    height: 100%;
    width: 10px;
}
#usersidebar .activate{
  background: #fff;
}
#usersidebar .listing{
  width: 73%;
}
</style>