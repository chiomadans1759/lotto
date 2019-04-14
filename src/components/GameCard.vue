<template>
	<section id="game-card">   
		<!--Run v-for="(detail, index) in details" :key="index" on you page and pass the required data to utilize component-->
		<div class="">
			<div class="card px-5 pt-4 pb-2 bg-white"> 
				<div class="border-bottom d-flex align-items-start"> 
					<img src="/img/icons/common/icon.png" class="mr-4">  
					<p class="success-text">{{detail.title}}</p> 
				</div>
				<div class="row mt-3">
					<p class="estimated">*Estimated</p>
				</div>
				<div class="row">
					<p class="money">N{{detail.money}}</p>
				</div>
				<div class="row">
					<p class="draw mb-3">Last draw : <span>{{detail.last_draw}}</span></p>
				</div>
				<div class="row">
					<p class="time">{{detail.time}}</p>
				</div>
				<div class="row pl-3 border-bottom">
					<p class="time-count mr-4">DAYS</p> <br />
					<p class="time-count mr-4">HOURS</p>
					<p class="time-count">MINS</p>
				</div>
			</div>
			<div class="card result py-2"> 
				<div class="d-flex justify-content-center"> 
					<button class="btn button pr-2">PLAY NOW</button>  
					<button class="btn button pl-2">VIEW RESULT</button> 
				</div> 
			</div>
		</div>  
	</section>
</template>

<script>
export default {
  props: { 
    detail: Object
	}
}
</script>

<style scoped> 
#game-card .success-text { 
	font-size: 30px;
	font-weight: bolder; 
	color: #666666;
	line-height: 30px;
}
#game-card img {
	width:38px;
	height:30px; 
}
#game-card .estimated,
#game-card .draw { 
	font-family: Circular Std;
	font-size: 16px; 
	color: #666666;
	font-weight: bold; 
} 
#game-card .draw {  
	margin-top:-15px;
}
#game-card .money {
	font-family: Circular Std;
	font-size: 48px;
	margin-top:-12px; 
	line-height: normal;
	color: #333333;
	font-weight: bolder;
}
#game-card .time{
	font-family: Circular Std;
	font-size: 35px;
	line-height: 24px;
	font-weight: bold;
	color: #666666;
	letter-spacing: 4px;
	border: 2px solid #DADADA;
	padding: 8px;
	border-radius: 10px;
}
#game-card .result {
	background: #DBFFE7;
	border:none;
	overflow:hidden; 
	margin-top:-10px;
	border-radius:8px;
} 
#game-card .time-count {
	font-size: 10px;
	font-weight: bold; 
	color: #666666; 
	margin-top:-15px;
}
#game-card button {
	background-color: #DBFFE7;
	font-family: Circular Std;
	font-size: 20px;
	line-height: normal;
	text-transform: uppercase;
	color:#269A4C;
	text-align:left;
} 
#game-card .border-bottom {
	border-bottom: 3px solid #F1F1F1!important;
}
</style>
