<template>
  <section class="row">
		<b-tabs v-model="tabIndex">
			<b-tab  v-for="(pill, index) in pills" :key="index" :title="pill" :title-link-class="linkClass(index)"></b-tab> 
		</b-tabs>
	</section>
</template>

<script> 

export default {  
	data() {
		return {
			tabIndex: 0, 
			pills: ["01", "02", "03", "04", "05"]
		}
	},
	methods: {
		linkClass(index) {
			if (this.tabIndex === index) {
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
	background-color:#fff;
}
</style>
