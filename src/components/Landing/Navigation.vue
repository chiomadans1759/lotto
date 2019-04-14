<template>
  <section class="section" id="navigation-landing">
    <div class="py-5 secondary">
      <div class="container justify-content-center align-items-center">
        <div class="row">
          <div class="col m-4 square">
            <h2 class="download-text">Download Our <br /> Mobile App</h2>
          </div>
          <div class="col  m-4 square text-center">
            <h2 class="win-text">Win Everyday!</h2>
            <button class="btn mx-auto d-block play btn-lg">Play Now</button>
          </div>
        </div>
      </div>
    </div> 
  </section>
</template>
<script>

export default {
}
</script>
<style scoped>
#navigation-landing .square {
  height: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  border: 0px solid;
}
#navigation-landing .download-text {
  font-weight: bold;
  padding-left: 30px;
  padding-top: 40px;
  color: #666666;
}
#navigation-landing .win-text {
  font-weight: bolder;
  padding-top: 120px;
  color: #666666;
}
#navigation-landing .play {
  width: 220px;
  background-color: #269A4C; 
} 
#navigation-landing .secondary {
  background: #F4F4F4;
}
</style>
