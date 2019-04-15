<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <span><img class="logo" src="img/brand/logo.png" alt="logo"></span>
    </div>

    <ul class="list-unstyled components">
      <router-link to="/dashboard"> 
        <div class="d-flex justify-content-center  align-items-center user-detail">
          <div class="user-name-sign d-flex justify-content-center align-items-center">P</div>
          <div class="d-flex flex-column ml-4">
            <span class="">Pelumi</span>
            <small class="variant-white">070342637819</small>
          </div>
        </div>
      </router-link>
        <div class="play">
          <span>Play</span>
        </div>
        <li class="active">
          <div class="bar" @click="success_toggle = !success_toggle" v-b-toggle.collapse-1>
            <div class="d-flex align-items-center">
              <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
              <span>Success</span> 
            </div>  
            <i v-if="success_toggle" class="fas fa-chevron-up"></i>
            <i v-else class="fas fa-chevron-down"></i>
          </div>
          <div v-if="!success_toggle" class="swwech"></div>
          <b-collapse id="collapse-1" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link> 
          </b-collapse>
        </li>

        <li class="mt-4">
        <div class="bar" @click="naira_toggle = !naira_toggle" v-b-toggle.collapse-2>
          <div class="d-flex align-items-center">
            <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
            <span>Naira</span> 
          </div>  
          <i v-if="naira_toggle" class="fas fa-chevron-up"></i>
          <i v-else class="fas fa-chevron-down"></i>
        </div>
          <div v-if="!naira_toggle" class="swwech"></div>
          <b-collapse id="collapse-2" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link>
          </b-collapse>
        </li>

        <li class="mt-4">
          <div class="bar" @click="kano_toggle = !kano_toggle" v-b-toggle.collapse-3>
            <div class="d-flex align-items-center">
              <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
              <span>Kano</span> 
            </div>  
            <i v-if="kano_toggle" class="fas fa-chevron-up"></i>
            <i v-else class="fas fa-chevron-down"></i>
          </div>
          <div v-if="!kano_toggle" class="swwech"></div>
          <b-collapse id="collapse-3" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link> 
          </b-collapse>
        </li>

        <li class="mt-4">
          <div class="bar" @click="naija_gold_toggle = !naija_gold_toggle" v-b-toggle.collapse-4>
            <div class="d-flex align-items-center">
              <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
              <span>Naija Gold</span> 
            </div>  
            <i v-if="naija_gold_toggle" class="fas fa-chevron-up"></i>
            <i v-else class="fas fa-chevron-down"></i>
          </div>
            <div v-if="!naija_gold_toggle" class="swwech"></div>
          <b-collapse id="collapse-4" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link>
          </b-collapse>
        </li>

        <li class="mt-4">
          <div class="bar" @click="rich_toggle = !rich_toggle" v-b-toggle.collapse-5>
            <div class="d-flex align-items-center">
              <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
              <span>Rich</span> 
            </div>  
            <i v-if="rich_toggle" class="fas fa-chevron-up"></i>
            <i v-else class="fas fa-chevron-down"></i>
          </div>
            <div v-if="!rich_toggle" class="swwech"></div>
          <b-collapse id="collapse-5" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link>
          </b-collapse>
        </li>

        <li class="mt-4 mb-4">
          <div class="bar" @click="ghana_toggle = !ghana_toggle" v-b-toggle.collapse-6>
            <div class="d-flex align-items-center">
              <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
              <span>Ghana</span> 
            </div>  
            <i v-if="ghana_toggle" class="fas fa-chevron-up"></i>
            <i v-else class="fas fa-chevron-down"></i>
          </div>
          <div v-if="!ghana_toggle" class="swwech"></div>
          <b-collapse id="collapse-6" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link>
          </b-collapse>
        </li>

        <div class="play pt-3 border-top">
          <span>Sunday Draws Only</span>
        </div>
        <li class="mt-4">
            <div class="bar" @click="cash_toggle = !cash_toggle" v-b-toggle.collapse-7>
              <div class="d-flex align-items-center">
                <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
                <span>Cash</span> 
              </div>  
              <i v-if="cash_toggle" class="fas fa-chevron-up"></i>
              <i v-else class="fas fa-chevron-down"></i>
            </div>
            <div v-if="!cash_toggle" class="swwech"></div>
          <b-collapse id="collapse-7" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link>
          </b-collapse>
        </li>
        <li class="mt-4">
            <div class="bar" @click="winna_toggle = !winna_toggle" v-b-toggle.collapse-8>
              <div class="d-flex align-items-center">
                <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
                <span>Winna</span> 
              </div>  
              <i v-if="winna_toggle" class="fas fa-chevron-up"></i>
              <i v-else class="fas fa-chevron-down"></i>
            </div>
              <div v-if="!winna_toggle" class="swwech"></div>
          <b-collapse id="collapse-8" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link>
          </b-collapse>
        </li>

        <li class="mt-4">
            <div class="bar" @click="millim_toggle = !millim_toggle" v-b-toggle.collapse-9>
              <div class="d-flex align-items-center">
                <img class="image-icon mr-3" src="img/icons/common/icon.png"/> 
                <span>Millim</span> 
              </div>  
              <i v-if="millim_toggle" class="fas fa-chevron-up"></i>
              <i v-else class="fas fa-chevron-down"></i>
            </div>
            <div v-if="!millim_toggle" class="swwech"></div>
          <b-collapse id="collapse-9" class="collapse-body">
            <router-link to=""><div class="collapse-children-1"><span>1 - 5 Direct Bet</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>+ 2 - 4 Perm</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>Banker</span></div></router-link>
            <router-link to=""><div class="collapse-children-1"><span>1A11</span></div></router-link>
          </b-collapse>
        </li>    
    </ul>
  </nav>
</template>
<script>
export default {
  name: "components",
  mounted(){ 
    var btns = document.getElementsByClassName("collapse-children-1");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activate");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" activate", "");
        } 
        this.className += " activate";
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
#sidebar a{
  text-decoration: none;
  color: #fff;
}
#sidebar a:hover{
  text-decoration: none;
}
#sidebar {
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
#sidebar .logo{
  width: 75%;
}
#sidebar .sidebar-header {
    padding: 32px 10px;
    margin-left: 5rem;
}
#sidebar ul.components {
    border-bottom: 1px solid #47748b;
    width: 100%;
    display: flex;
    flex-direction: column;
}
#sidebar .user-detail{
  background: #21703A;
  height: 75px;
}
#sidebar .user-name-sign{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #269A4C;
}
#sidebar .play{
  height: 75px;
  padding-left: 3rem;
  line-height: 75px;
  font-weight: bold;
}
#sidebar .image-icon{
  height: 28px;
}
#sidebar .bar{
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 100px 0 0 100px;
  background: #fff;
  text-align: center;
  height: 50px;
  color: #666;
  cursor: pointer;
  padding: 0 16px 0 6px;
  margin-right: 1rem;
  margin-left: 4rem;
  font-weight: bold;
}
#sidebar .collapse-body{
  position: relative;
  background: #21703a;
  max-height: 300px;
  overflow-y: scroll;
  padding-top: 3px;
  margin-top: 23px;
  font-weight: bold;
}
#sidebar li{
    position: relative;
}
#sidebar li .swwech{
    position: absolute;
	top: 91px;
    left: 66%;
    width: 0;
    height: 0;
    border: 28px solid transparent;
    border-bottom-color: #21703a;
    border-top: 0;
    margin-left: 3.5px;
    margin-top: -41px;
}
#sidebar .collapse-children-1{
    padding: 13px;
    text-align: center;
    margin-left: 2rem;
    color:#abf8c5;
    cursor: pointer;
    text-align: left;

}
#sidebar .collapse-children-1 span{
    margin-left: 3rem;
}
#sidebar .activate, #sidebar .collapse-children-1:hover{
  background: #abf8c5;
  color: #21703a; 
}

</style>