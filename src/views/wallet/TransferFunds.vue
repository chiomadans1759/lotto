<template>
  <section id="how-to-play">
		<div class=""> 
			<div class="result-card p-5">
				<div class="d-flex justify-content-between align-items-center border-boda pb-3">
					<h3>Current ballance</h3>
					<h4 class="ml-5">N<span>100,784</span>.98</h4>
				</div> 
				<div class="d-flex justify-content-between align-items-center border-bottom direct-bet py-3">
					<div class="d-flex justify-content-between align-items-center">
						<p class="p2 pr-3 mt-3">Currency</p>
						<b-tabs v-model="tabIndex">
							<b-tab title="NGN" :title-link-class="linkClass(0)"></b-tab>
							<b-tab title="USD" :title-link-class="linkClass(1)"></b-tab>
							<b-tab title="GBP" :title-link-class="linkClass(2)"></b-tab>
							<b-tab title="ZAR" :title-link-class="linkClass(3)"></b-tab> 
						</b-tabs>
					</div> 
				</div>
				<div class="mt-4">
					<p class="p2">Enter Amount</p>
					<input type="text" name="amount" class="form-control p-4">
				</div>  
				<div class="mt-4">
					<p class="p2">Phone Number</p>
					<input type="text" name="amount" class="form-control p-4">
				</div> 
				<div class="mt-4">
					<p class="p2">Password</p>
					<input type="text" name="amount" class="form-control p-4 mb-3">
					<span class="max-span">*Maximum Widthrawal is N1, 000.00</span>
				</div> 
				<button class="btn play mt-5 py-2 px-5">Transfer</button> 
			</div>
		</div>
	</section>
</template>

<script> 
// import PillsNav from "@/components/PillsNav.vue"
export default {  
	// components: { PillsNav },
	data() {
		return {
			tabIndex: 0,
			// pills: ["01", "02", "03", "04", "05"]
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
	background: #fffffe;
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
#how-to-play .max-span{
	font-size: 20px; 
	color: #FF2F3C;
}
#how-to-play input{
	background: #FAFAFA;
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
#how-to-play .play {
  background-color: #269A4C; 
  color:#fff; 
	font-size: 24px;
	text-transform: none;
	font-weight:bold; 
	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
}
</style>
