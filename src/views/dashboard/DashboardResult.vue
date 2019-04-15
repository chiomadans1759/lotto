<template>
  <section id="dashboard-result">
		<div class="container">
			<div class="py-5">
				<h1 class="mb-4">Result</h1>
				<div class="d-flex justify-content-between mb-2">
					<div class="card result-card p-5">
						<div class="d-flex justify-content-between align-items-center border-bottom">
							<p>You have selected to view <span>Naira</span> result</p>
							<button class="btn">Cancel</button>
						</div>
						<div class="d-flex justify-content-between align-items-center border-bottom direct-bet">
							<p class="p1 pb-3 pt-4">1-5 Direct Bet</p>
							<p class="p2">Draw ID 1930</p>
						</div>
						<div class="d-flex justify-content-between align-items-center border-bottom direct-bet">
							<div class="pt-4 pb-5">
								<h6>Winning Numbers</h6>
								<div class="card pl-2">
									<img src="/img/trys.png"> 
								</div>
							</div>
							<p class="p3">Play Number<span class="px-3 ml-2">5</span></p>
						</div>

						<div class="d-flex justify-content-between align-items-center border-bottom direct-bet">
							<p class="p1 pb-3 pt-4">+ 2 - 4 Perm
							</p>
							<p class="p2">Draw ID 1930</p>
						</div>
						<div class="border-bottom direct-bet d-flex">
							<div class="pt-4 pb-5">
								<h6>Winning Numbers</h6>
								<div class="card pl-2">
									<img src="/img/trys.png"> 
								</div>
							</div> 
						</div>

						<div class="d-flex justify-content-between align-items-center border-bottom direct-bet">
							<p class="p1 pb-3 pt-4">Banker
							</p>
							<p class="p2">Draw ID 1930</p>
						</div>
						<div class="border-bottom direct-bet d-flex">
							<div class="pt-4 pb-5">
								<h6>Winning Numbers</h6>
								<div class="card pl-2">
									<img src="/img/trys.png"> 
								</div>
							</div> 
						</div>
						<div class="d-flex justify-content-between align-items-center border-bottom direct-bet">
							<p class="p1 pb-3 pt-4">1A11
							</p>
							<p class="p2">Draw ID 1930</p>
						</div>
						<div class="direct-bet d-flex">
							<div class="pt-4 pb-5">
								<h6>Winning Numbers</h6>
								<div class="card pl-2">
									<img src="/img/trys.png"> 
								</div>
							</div> 
						</div>

					</div>
				</div> 
			</div> 
			<div class="d-flex justify-content-between mx-0">
				<game-card class="game-card" v-for="(detail, index) in details" :key="index" :detail="detail"/>
			</div>
		</div>  
	</section>
</template>

<script>
import GameCard from "@/components/GameCard.vue"

export default { 
	components: { GameCard },
	data() {
		return {	 
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
				},
				{
					title: "Kano", 
					money: "875, 123",
					last_draw: "2hrs ago",
					time: '09:14:44' 
				}
			]
		}
	}
}
</script>

<style scoped> 
#dashboard-result {
	background: #E5E5E5;
}
#dashboard-result .border-bottom {
	border-bottom: 2px solid rgba(20, 0, 5, 0.1)!important;
}
#dashboard-result h1 {
	font-size: 30px; 
	color: #333333; 
	font-weight:bold;
}
#dashboard-result .result-card {
	width:100%;
}
#dashboard-result  .btn {
	text-transform: none!important;
}
#dashboard-result p { 
	font-size: 24px;
	line-height: 46px; 
	color: #666666;
}
#dashboard-result p span{  
	color: #21703A;
	font-weight: 500;
}
#dashboard-result button {
	font-size: 28px; 
	color: #269A4C;
}
#dashboard-result .direct-bet .p1 {
	font-size: 24px;  
	color: #21703A;
	font-weight: bold;
}
#dashboard-result .direct-bet .p2 {
	font-size: 24px; 
	color: #666666; 
	font-weight: bold;
}
#dashboard-result .direct-bet .p3 span {
	background:#B0FBC9;
	border-radius:10px;
}
#dashboard-result .direct-bet .card{
	background: #F4F4F4;
	border-radius: 10px; 
} 
#dashboard-result .direct-bet img{
	height:30px;
	width:30px;
} 
#dashboard-result h6 {
	color: #333333;
	font-size: 24px;
	font-weight:bold;
}
#dashboard-result .game-card {
	padding-bottom:20vh;
	width:32.5%;
} 
</style>
