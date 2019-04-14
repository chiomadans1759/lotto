<template>
  <div id="not-found" class="d-flex justify-content-center align-items-center">
		<div class="container"> 
			<img src="/img/not-found.png" class="mb-3">
			<h2 class="oops">Oooops! Page Not Found</h2>
			<p>We are sorry for the inconvenience. Please try again.</p>
			<button class="btn mx-auto d-block play btn-lg">Back to Homepage</button>  
		</div>
	</div> 
</template>

<script>
export default {

}
</script>

<style scoped>
#not-found {
  background: #ffffff;
  height:100vh;
  text-align:center;
}
#not-found img { 
  height:025%; 
  width:60%;
}
#not-found .oops {
  font-weight: bolder;  
  color: #333333;
  font-size: 48px;
}
#not-found  p {
  font-size: 24px;
  line-height: normal; 
  color: #666666;
}
</style>
