<template>
  <section class="section bg-secondary" id="trending-game">
    <div class="container">
      <h3 class="trending-text text-center mb-5">Trending Games</h3>
      <div class="row d-flex justify-content-between">
        <game-card v-for="(detail, index) in details" :key="index" :detail="detail"/>
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
#trending-game .trending-text{  
  font-size: 48px; 
  color: #21703A;
  font-weight: bolder; 
  text-align: center; 
} 
</style>
