<template>
  <section id="how-to-play">
		<div class="container">
			<div class="pt-5 pb-4">
				<h1 class="mb-4">Result</h1>
				<div class="d-flex justify-content-between mb-2">
					<div class="card result-card p-5">
						<div class="d-flex justify-content-between align-items-center border-bottom">
							<p>You are playing <span>1-5 Direct Bet</span></p>
							<button class="btn how-to-play">How to Play</button>
						</div>
						<div class="d-flex justify-content-between align-items-center border-bottom direct-bet">
							<h6 class="p1 pb-3 pt-4">Ticket</h6>
							<div class="d-flex justify-content-between align-items-center">
								<p class="p2 pr-3 mt-3">Play Number</p>
								<b-tabs v-model="tabIndex">
									<b-tab title="01" :title-link-class="linkClass(0)"></b-tab>
									<b-tab title="02" :title-link-class="linkClass(1)"></b-tab>
									<b-tab title="03" :title-link-class="linkClass(2)"></b-tab>
									<b-tab title="04" :title-link-class="linkClass(3)"></b-tab>
									<b-tab title="05" :title-link-class="linkClass(4)"></b-tab>
								</b-tabs>
							</div>
						</div>
						<div class="d-flex justify-content-between align-items-center direct-bet mt-4">
							<p class="p4">Lotto Lipsum Allum Natum ipsum</p>
							<p class="p3">No of Draws<span class="px-3 ml-2">1</span></p>
						</div> 
						<div class="d-flex justify-content-between align-items-center mt-5">
							<button class="btn board px-3 py-2btn-lg">Board A</button> 
							<p class="p3">Your selected numbers are</p>
							<button class="btn play btn-lg py-3 px-5">Choose 5 Numbers</button> 
						</div> 
						<div class="d-flex justify-content-end my-5 py-5"> 
							<button class="btn play btn-lg py-2 px-4 bold">Add Board</button> 
						</div>   
					</div>
				</div>
			</div> 
			<div class="d-flex justify-content-between align-items-center">
				<div class="card col-md-9">
					<div class="d-flex justify-content-between align-items-center pt-3">
						<h2 class="ml-5">Naira</h2>
						<p class="p3">Boards<span class="px-3 py-1 ml-2 naira-span">2</span></p>
						<p class="p3">Draws<span class="px-3 ml-2 py-1 naira-span">5</span></p>
						<h2 class="mr-5 pr-5"><span>N</span>0. 00</h2>
					</div>
				</div> 
				<div class="d-flex justify-content-end pr-0">
					<button class="btn play btn-lg py-2 px-4 bold">Add to Cart</button> </div>
			</div> 
			<div class="row"> 
				<pills-nav/>
			</div>
			<div class="row d-flex justify-content-between mt-5 col-md-8">
				<game-card class="game-card" v-for="(detail, index) in details" :key="index" :detail="detail"/> 
			</div>
		</div>  
	</section>
</template>

<script>
import GameCard from "@/components/GameCard.vue"
import PillsNav from "@/components/PillsNav.vue"

export default { 
	components: { GameCard, PillsNav },
	data() {
		return {
			tabIndex: 0,	 
			details: [
				{
					title: "Naija Gold", 
					money: "300, 000",
					last_draw: "05 Mar 2019",
					time: '04:04:04' 
				},
				{
					title: "Success", 
					money: "450, 347",
					last_draw: "05 Mar 2019",
					time: '01:07:11' 
				} 
			]
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
#how-to-play .border-bottom {
	border-bottom: 2px solid rgba(20, 0, 5, 0.1)!important;
}
#how-to-play h1 {
	font-size: 30px; 
	color: #333333; 
	font-weight:bold;
}
#how-to-play .result-card {
	width:100%;
}
#how-to-play .btn {
	text-transform: none!important;
}
#how-to-play p { 
	font-size: 24px;
	line-height: 46px; 
	color: #666666;
}
#how-to-play p span{  
	color: #21703A;
	font-weight: 500;
}
#how-to-play .how-to-play{
	font-size: 28px; 
	color: #269A4C;
}
#how-to-play .direct-bet button {
	padding:0;
}
#how-to-play .direct-bet .p1 {
	font-size: 30px; 
	color: #333333;
}
#how-to-play .direct-bet .p2 {
	font-size: 24px; 
	color: #666666; 
	font-weight: bold; 
}
#how-to-play .direct-bet .p3 span {
	background:#B0FBC9;
	border-radius:10px;
}
#how-to-play .p4 {
	font-size: 30px;
	line-height: normal;
	color: #666666;
	font-family: Circular Std;
} 
#how-to-play .play {
  background-color: #269A4C; 
  color:#fff;
	border-radius:10px;
}
#how-to-play .bold {
	font-weight:bold;
}
#how-to-play .board {
	background: #F4F4F4;
	box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.06);
	border-radius: 10px;
	color: #666666;
	font-size: 30px;
	font-weight:bold; 
}
#how-to-play h2 {
	font-family: Circular Std;
	font-size: 32px; 
	color: #666666;
	font-weight:bold;
}
#how-to-play h2 span {
	font-size:20px;
}
#how-to-play .naira-span {
	background: #269A4C;
	border-radius: 10px;
	color:#fff!important;
	font-size:20px!important;
}
#how-to-play .game-card {
	width:49%;
}
#how-to-play .container {
	padding-bottom:30vh;
}
</style>
