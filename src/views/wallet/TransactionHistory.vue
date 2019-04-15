<template>
  <section id="how-to-play">
		<div class="container"> 
			<div class="result-card p-5">
				<div class="d-flex justify-content-between align-items-center border-bottom">
					<h3>Current ballance</h3>
					<h4 class="ml-5">N<span>100,784</span>.98</h4>
				</div>
				<h6 class="border-bottom py-4">Transaction History</h6>
				<div class="d-flex justify-content-between align-items-center border-boda direct-bet">
					<div class="d-flex justify-content-between align-items-center">
						<p class="p2 pr-3 mt-3">Currency</p>
						<b-tabs v-model="tabIndex">
							<b-tab title="NGN" :title-link-class="linkClass(0)"></b-tab>
							<b-tab title="USD" :title-link-class="linkClass(1)"></b-tab>
							<b-tab title="GBP" :title-link-class="linkClass(2)"></b-tab>
							<b-tab title="ZAR" :title-link-class="linkClass(3)"></b-tab> 
						</b-tabs>
					</div>
					<h6 class="p1 pb-3 pt-4">Ticket</h6>
				</div> 
				<div class="d-flex justify-content-between align-items-center pt-3 pb-2 border-bottom">
					<div class="d-flex align-items-center">
						<p class="p6 mr-4 d-flex justify-content-center align-items-center"><i class="fas fa-arrow-down"></i></p>
						<p class="p1">08162113799<br><span>27/3/2019</span></p>
					</div>
					<p class="p3">Online Payment</p>
					<div>
						<p class="p4">51, 800.79<br><span>02:03</span></p>
					</div>
				</div> 
				<div class="d-flex justify-content-between align-items-center pt-3 pb-2 border-bottom">
					<div class="d-flex align-items-center">
						<p class="p7 mr-4 d-flex justify-content-center align-items-center"><i class="fas fa-arrow-down"></i></p>
						<p class="p1">07097453799<br><span>01/5/2019</span></p>
					</div>
					<p class="p3">Online Payment</p>
					<div>
						<p class="p8">51, 800.79<br><span>02:03</span></p>
					</div>
				</div> 
				<div class="d-flex justify-content-between align-items-center pt-3 pb-2 border-bottom">
					<div class="d-flex align-items-center">
						<p class="p7 mr-4 d-flex justify-content-center align-items-center"><i class="fas fa-arrow-down"></i></p>
						<p class="p1">07097453799<br><span>01/5/2019</span></p>
					</div>
					<p class="p3">Online Payment</p>
					<div>
						<p class="p8">51, 800.79<br><span>02:03</span></p>
					</div>
				</div> 
				<div class="d-flex justify-content-between align-items-center pt-3 pb-2 border-bottom">
					<div class="d-flex align-items-center">
						<p class="p6 mr-4 d-flex justify-content-center align-items-center"><i class="fas fa-arrow-down"></i></p>
						<p class="p1">08162113799<br><span>27/3/2019</span></p>
					</div>
					<p class="p3">Online Payment</p>
					<div>
						<p class="p4">51, 800.79<br><span>02:03</span></p>
					</div>
				</div> 
				<div class="d-flex justify-content-between align-items-center pt-3 pb-2 border-bottom">
					<div class="d-flex align-items-center">
						<p class="p7 mr-4 d-flex justify-content-center align-items-center"><i class="fas fa-arrow-down"></i></p>
						<p class="p1">07097453799<br><span>01/5/2019</span></p>
					</div>
					<p class="p3">Online Payment</p>
					<div>
						<p class="p8">51, 800.79<br><span>02:03</span></p>
					</div>
				</div>   
			</div>  
		</div>  
	</section>
</template>

<script> 

export default {  
	data() {
		return {
			tabIndex: 0
		}
	},
	methods: {
		linkClass(idx) {
			if (this.tabIndex === idx) {
				return ['pill-green', 'text-white']
			} else {
				return ['pill-default', 'text-black']
			}
		}
	}
}
</script>
<style>
.pill-green { 
	background: #269A4C !important;
	margin-left:5px;
	padding:2px 15px; 
	border-radius:5px;
}
ul { 
	border:none !important;
} 
.pill-default {
	border: 1.5px solid #E8E8E8 !important;
	margin-left:5px;
	padding:2px 8px; 
	padding:2px 15px; 
	border-radius:5px;
}
</style>

<style scoped> 
#how-to-play {
	background: #E5E5E5;
} 
#how-to-play .border-boda {
	border-bottom: 2px solid rgba(20, 0, 5, 0.1)!important;
} 
#how-to-play p span{  
	color: #B0B0B3;
	font-size: 18px;
	font-weight:600;
} 
#how-to-play .p1 {
	font-size: 28px;
	color: #74757B;
}  
#how-to-play .p2 {
	font-size: 24px; 
	color: #666666; 
}
#how-to-play .p3 {
	font-size: 24px;  
	color: #B0B0B3;
	font-weight: bold;  
}
#how-to-play .p4 {
	font-size: 28px;
	color: #269A4C;
} 
#how-to-play .p5 {
	font-size: 28px;
	color: #BE1B25;
} 
#how-to-play .p6 {
	background: #B0FBC9;
	width:52px;
	height:52px;
	border-radius:50%;
} 
#how-to-play .p6 i {
	color:#269A4C;
	border-radius: 2px; 
	font-size:24px; 
	transform: rotate(310deg);
}
#how-to-play .p7 {
	background: #FFCCCC; 
	width:52px;
	height:52px;
	border-radius:50%;
} 
#how-to-play .p7 i { 
	color: #BE1B25;
	border-radius: 2px;  
	font-size:24px; 
	transform: rotate(140deg);
}
#how-to-play .p8 {
	color: #BE1B25;
	font-size: 28px;
}
#how-to-play h6 {
	font-family: Graphik;
	font-size: 24px; 
	color: #666666;
	font-weight:bold;
}
#how-to-play h4 {
	font-size: 30px;
	color: #269A4C;
	font-weight:bold;
} 
#how-to-play h4 span{
	font-size: 58px;
	color: #269A4C;
	font-weight:bolder;
} 
</style>
