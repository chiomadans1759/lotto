<template>
    <section class="section pb-0 section-components">
        <div class="py-5 bg-secondary">
       <h3 class="trending-text text-center">Trending Games</h3>

            <div class="container">
                <!-- Inputs (alternative) -->
               
                <div class="row bg-cards">
                    <div class="col-lg-4">
                       <div class="card card1">
                         <div class="row lines">
                             <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img src="/img/icons/common/icon.png" class="img-fluid">
                             </div>
                              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                 <p class="success-text">Success</p>
                             </div>
                         </div>
                         <div class="row marginRow">
                             <p class="est">*Estimated</p>
                         </div>
                         <div class="row marginRow">
                             <p class="money">N300,000</p>
                         </div>
                         <div class="row marginRow">
                             <p class="draw">Last draw : <span>05 Mar 2019</span></p>
                         </div>
                         <div class="row marginRow ">
                             <p class="time"> 04:04:04</p>
                         </div>
                         <div class="row">
                            <p class="desc">DAYS</p> <br />
                            <p class="desc">HOURS</p>
                            <p class="desc">MINS</p>
                         </div>
                         <div class="row">
                             <div class="container result">
                                 <div class="row">
                                     <div class="col-lg-5">
                                         <button class="btn button">PLAY NOW</button>
                                     </div>
                                     <div class="col-lg-7">
                                         <button class="btn button">VIEW RESULT</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                       </div>
                    </div>
                    <div class="col-lg-4">
                       <div class="card card1">
                         <div class="row lines">
                             <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img src="/img/icons/common/icon.png" class="img-fluid">
                             </div>
                              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                 <p class="success-text">Naira</p>
                             </div>
                         </div>
                         <div class="row marginRow">
                             <p class="est">*Estimated</p>
                         </div>
                         <div class="row marginRow">
                             <p class="money">N300,000</p>
                         </div>
                         <div class="row marginRow">
                             <p class="draw">Last draw : <span>05 Mar 2019</span></p>
                         </div>
                         <div class="row marginRow ">
                             <p class="time"> 04:04:04</p>
                         </div>
                         <div class="row">
                            <p class="desc">DAYS</p> <br />
                            <p class="desc">HOURS</p>
                            <p class="desc">MINS</p>
                         </div>
                         <div class="row">
                             <div class="container result">
                                 <div class="row">
                                     <div class="col-lg-5">
                                         <button class="btn button">PLAY NOW</button>
                                     </div>
                                     <div class="col-lg-7">
                                         <button class="btn button">VIEW RESULT</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                       </div>
                    </div>
                    <div class="col-lg-4">
                       <div class="card card1">
                         <div class="row lines">
                             <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <img src="/img/icons/common/icon.png" class="img-fluid">
                             </div>
                              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                 <p class="success-text">Kano</p>
                             </div>
                         </div>
                         <div class="row marginRow">
                             <p class="est">*Estimated</p>
                         </div>
                         <div class="row marginRow">
                             <p class="money">N300,000</p>
                         </div>
                         <div class="row marginRow">
                             <p class="draw">Last draw : <span>05 Mar 2019</span></p>
                         </div>
                         <div class="row marginRow ">
                             <p class="time"> 04:04:04</p>
                         </div>
                         <div class="row">
                            <p class="desc">DAYS</p> <br />
                            <p class="desc">HOURS</p>
                            <p class="desc">MINS</p>
                         </div>
                         <div class="row">
                             <div class="container result">
                                 <div class="row">
                                     <div class="col-lg-5">
                                         <button class="btn button">PLAY NOW</button>
                                     </div>
                                     <div class="col-lg-7">
                                         <button class="btn button">VIEW RESULT</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
.trending-text{
    height: 44px;
font-family: Graphik;
font-size: 40px;
line-height: normal;
color: #21703A;
font-weight: bolder;
letter-spacing: -2px;
text-align: center;
margin-bottom: 70px; 
}

.success-text {
font-family: Circular Std;
font-size: 32px;
font-weight: bolder;
line-height: normal;
color: #666666;
}

.lines {
	border-bottom: 1px solid #666666;
    padding-right: 20px;
    padding-left: 20px;
}

.est{
   margin-top: 20px;
   font-family: Circular Std;
   font-size: 16px;
   line-height: 24px;
   color: #666666;
   font-weight: bold;
}
.money {
    font-family: Circular Std;
    font-size: 48px;
    line-height: normal;
    color: #333333;
    font-weight: bolder;
}
.marginRow{
    margin-bottom: -4px !important; 
}

.draw {
    font-family: Circular Std;
font-size: 16px;
line-height: 24px;
font-weight: bold;
color: #666666;
}
.time{
        font-family: Circular Std;
font-size: 35px;
line-height: 24px;
font-weight: bold;
color: #666666;
letter-spacing: 4px;
border: 1px solid #666666;
padding: 8px;
border-radius: 10px;

}
.result {
    background: #DBFFE7;
}

.desc {
    font-size: 10px;
    font-weight: bold;
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
}
.button {
    background-color: #DBFFE7;
    font-family: Circular Std;
    font-size: 24px;
    line-height: normal;
    text-transform: uppercase;
    color: #269A4C;
}

.card1{
    background-color: #FFFFFF;
    padding-left: 30px !important;
    padding-right: 30px !important;
    padding-top: 40px;
    padding-bottom: 40px;
}

</style>
