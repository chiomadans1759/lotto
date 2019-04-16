<template>
 <nav id="walletsidenav">
        <div class="sidebar-header">
            <h2 class="m-0 variant-white">My Wallet</h2>
        </div>
        <div class="mt-5 bod"></div>
        <ul class="list-unstyled components">
            <li class="mt-3">
              <router-link :to="{name:'transfer-funds'}"> 
               <div class="items d-flex justify-content-between">
                 <div class="indicator"></div>
                 <div class="listing">
                   <i class="fas fa-exchange-alt"></i>
                   <span class="ml-4">Transfer Funds</span>
                 </div>
               </div>
              </router-link>
            </li>

            <li class="mt-1">
              <router-link to="/wallet"> 
               <div class="items d-flex justify-content-between">
                 <div class="indicator"></div>
                 <div class="listing">
                   <i class="fas fa-money-check-alt"></i>
                   <span class="ml-4">Fund Wallet</span>
                 </div>
               </div>
              </router-link>
            </li>

            <li class="mt-1">
              <router-link :to="{name:'widthdraw-funds'}"> 
                <div class="items d-flex justify-content-between">
                  <div class="indicator"></div>
                  <div class="listing">
                    <i class="fas fa-poll"></i>
                    <span class="ml-4">Withdraw Funds</span>
                  </div>
                </div>
              </router-link>
            </li>

            <li class="mt-1">
              <router-link to="/wallet"> 
                <div class="items d-flex justify-content-between">
                  <div class="indicator"></div>
                  <div class="listing">
                    <i class="fas fa-history"></i>
                    <span class="ml-4">Transaction History</span>
                  </div>
                </div>
              </router-link>
            </li>

            <li class="mt-1">
              <router-link to="/wallet"> 
                <div class="items d-flex justify-content-between">
                  <div class="indicator"></div>
                  <div class="listing">
                    <i class="fas fa-tasks"></i>
                    <span class="ml-4">Bank Acct Details</span>
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
    // Get the container element
    // var btnContainer = document.getElementById("collapse-1");

    // Get all buttons with class="btn" inside the container
    var btns = document.getElementsByClassName("items");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("activate");
        var current2 = document.getElementsByClassName("bolder");

        // If there's no active class
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" activate", "");
        }
        if (current2.length > 0) { 
          current2[0].className = current2[0].className.replace(" bolder", "");
        }

        // Add the active class to the current/clicked button
        this.className += " bolder"
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
#walletsidenav h2{
  color: #fff;
}
#walletsidenav a{
  text-decoration: none;
  color: #fff;
}
#walletsidenav a:hover{
  text-decoration: none;
}
#walletsidenav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: url('~/img/theme/side-nav.png');
  background-repeat: repeat;
  color: #fff;
  transition: all 0.3s;
  overflow-x: scroll;
}
#walletsidenav .logo{
  width: 75%;
}
#walletsidenav .sidebar-header {
    padding: 50px 10px 0 10px;
    color: #fff !important;
}
#walletsidenav  .bod{
  width: 73%;
  border: .5px solid #489d64;
}
#walletsidenav ul.components {
    border-bottom: 1px solid #47748b;
    width: 100%;
    display: flex;
    flex-direction: column;
}
#walletsidenav .user-detail{
  background: #21703A;
  height: 75px;
}
#walletsidenav .user-name-sign{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #269A4C;
}
#walletsidenav .items{
  height: 65px;
  line-height: 75px;
  cursor: pointer;
}
#walletsidenav .bolder{
  font-weight: bold;
}
#walletsidenav .items:hover{
  font-weight: bold;
}
#walletsidenav .items:hover .indicator{
  background: #fff;
}
#walletsidenav .indicator{
    height: 100%;
    width: 10px;
}
#walletsidenav .activate{
  background: #fff;
}
#walletsidenav .listing{
  width: 73%;
}
</style>