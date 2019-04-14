<template>
  <section id="dashboard">
		<div class="container py-5">
			<h1 class="mb-4">Dashboard</h1>
			<div class="d-flex justify-content-between mb-2">
				<div class="card px-5 pt-4 pb-2 bg-white card-one"> 
					<h3>Current Balance<br><span> Tuesday, 6th April 2019</span></h3>
					<h4 class="ml-5">N<span>100,784</span>.98</h4>
					<p class="d-flex justify-content-between align-items-center mt-5"><span>+234 8162113799</span><i class="far fa-user"></i></p>
				</div>
				<div class="card px-4 pt-4 pb-2 bg-white card-two">  
					<div class="d-flex align-items-center">
						<div class="col-md-5" >
							<div class="progress" data-percentage="70">
								<span class="progress-left">
									<span class="progress-bar"></span>
								</span>
								<span class="progress-right">
									<span class="progress-bar"></span>
								</span>
								<div class="progress-value">
									<div>70%</div>
								</div>
							</div>  
 						</div>
						<div class="progress-details col-md-7 pl-5">
							<div class="row my-5">
								<div class="col-md-3"><img src="/img/dashboard-badge.png"> </div>
								<div class="col-md-9"><span>05 games played</span></div>
							</div>
							<p>Daily Overall number of games</p>
						</div> 
					</div>
				</div>
			</div>

			<div class="d-flex justify-content-between mb-5">
				<div class="card-one-one">
					<div class="card px-5 py-4 mb-2">   
						<div class="d-flex justify-content-between align-items-center">
							<div class="wins">
								<h5>Number of<br>wins</h5>
								<h1 class="mt-5">68</h1>
							</div>
							<div><img src="/img/wins.png"></div>
						</div>
					</div>
					<div class="card px-5 py-4">   
						<div class="d-flex justify-content-between align-items-center">
							<div class="wins">
								<h5>Number of<br>active games</h5>
								<h1 class="mt-5">02</h1>
							</div>
							<div><img src="/img/games.png"></div>
						</div>
					</div>
				</div>
				<div class="card bg-white card-two-two">  
					<img class="card bg-white card-two-two" src="/img/win-big.png">
				</div>
			</div>

			<div class="">
				<h1 class="py-5">Results of games played</h1>
				<h5 class="mb-3">Success</h5>
				<div class="card bg-white p-4 result mb-5">
					<div class="d-flex justify-content-between align-items-center">
						<h4 class="col-md-4 ml-5">1-5 Direct bet</h4>
						<div class="card col-md-7 p-3 pl-5">
							<h6>Winning Numbers</h6>
							<div class="card pl-2" id="card-result">
								<img src="/img/trys.png"> 
							</div>
						</div>
					</div>
				</div>

				<h5 class="mb-3">Cash</h5>
				<div class="card bg-white p-4 result mb-5">
					<div class="d-flex justify-content-between align-items-center">
						<h4 class="col-md-4 ml-5">+ 2 - 4 Perm</h4>
						<div class="card col-md-7 p-3 pl-5">
							<h6>Winning Numbers</h6>
							<div class="card pl-2" id="card-result">
								<img src="/img/trys.png"> 
							</div>
						</div>
					</div>
				</div>

				<h5 class="mb-3">Naija Gold</h5>
				<div class="card bg-white p-4 result mb-2">
					<div class="d-flex justify-content-between align-items-center">
						<h4 class="col-md-4 ml-5">Banker</h4>
						<div class="card col-md-7 p-3 pl-5">
							<h6>Winning Numbers</h6>
							<div class="card pl-2" id="card-result">
								<img src="/img/trys.png"> 
							</div>
						</div>
					</div>
				</div>
				<div class="card bg-white p-4 result">
					<div class="d-flex justify-content-between align-items-center">
						<h4 class="col-md-4 ml-5">1A11</h4>
						<div class="card col-md-7 p-3 pl-5">
							<h6>Winning Numbers</h6>
							<div class="card pl-2" id="card-result">
								<img src="/img/trys.png"> 
							</div>
						</div>
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

<style lang="scss" scoped> 
#dashboard {
	background: #E5E5E5;
}
#dashboard h1 {
	font-size: 30px; 
	color: #333333; 
	font-weight:bold;
}
#dashboard p { 
	font-size: 20px; 
	color: #333333;
	font-weight:bold; 
}
#dashboard p i{ 
	font-size: 20px; 
	color: #666666; 
}
#dashboard h3 {
	font-size: 20px; 
	color: #333333; 
	font-weight: bold;
	line-height:22px;
}
#dashboard h3 span {
	font-size: 16px; 
	color: #666666; 
}
#dashboard h4 {
	font-size: 30px;
	color: #269A4C;
	font-weight:bold;
}
#dashboard .result h4 { 
	color: #21703A; 
}
#dashboard h4 span{
	font-size: 58px;
	color: #269A4C;
	font-weight:bolder;
} 
#dashboard .card-one, 
#dashboard .card-two, 
#dashboard .card-one-one,
#dashboard .card-two-two{
	width:49.5%;
} 
#dashboard .completed-text {
	text-align:center!important;
} 
#dashboard img {
	height:50px;
	width:40px;
} 
#dashboard .progress-details span {
	color: #269A4C;
	font-size:26px;
	font-weight: bold;
	line-height: 26px;
}
#dashboard .progress-details p { 
	font-size:18px;
	color: #666666;
}
#dashboard .card-two-two img{ 
	background-size: cover;
	object-fit: cover;
	width:100%;
	height:100%;
} 
#dashboard .card-one-one img{
	width:141px;
	height:141px;
	background-size: cover;
	object-fit: cover;
	border-radius:50%;
}
#dashboard h5 {
	font-size: 30px;
	line-height: 33px;
	color: #666666;
	font-family: Circular Std;
	font-weight: bold;
}
#dashboard .wins h1 {
	font-size: 90px;
	line-height: normal;
	color: #269A4C;
	font-family: Graphik;
}
#dashboard .result .card {
	background: #EDF0F5;
	border-radius: 15px;
}
#dashboard .result .card .card{
	background: #F4F4F4;
	border-radius: 10px; 
} 
#dashboard .result {
	border-radius: 15px;
}
#dashboard .result h6 {
	color: #333333;
	font-size: 24px;
	font-weight:bold;
}

$borderWidth: 15px;
$animationTime: 1.5s;
$border-color-default: #D6E7DD;;
$border-color-fill: #269A4C;
$size: 180px; 
$howManySteps: 10; 

.progress {
  width: $size;
  height: $size;
  line-height: $size;
  background: none;
  margin: 0;
	padding:0;
  box-shadow: none;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: $borderWidth solid $border-color-default;
    position: absolute;
    top: 0;
    left: 0;
  }
  > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .progress-left {
    left: 0;
  }
  .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: $borderWidth;
    border-style: solid;
    position: absolute;
    top: 0;
    border-color: $border-color-fill;
  }
  .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: ($size/2);;
    border-bottom-right-radius: ($size/2);;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
    //animation: loading-2 1.5s linear forwards 1.8s;
  }
  .progress-right {
    right: 0;
    .progress-bar {
      left: -100%;
      border-top-left-radius: ($size/2);;
      border-bottom-left-radius: ($size/2);;
      border-right: 0;
      -webkit-transform-origin: center right;
      transform-origin: center right;
      //animation: loading-1 1.8s linear forwards;
    }
  }
  .progress-value {
    display: flex;
    border-radius: 50%;
		color: #666666;
    font-size: 34px; 
		position:absolute;
		bottom:25%;
		right:30%;  
    text-align: center!important;
    line-height: 20px;
    align-items: center; 
    justify-content: center right;
    height: 60%; 
    //font-family: $work-sans;
    font-weight: 600;
    div {
      margin-top: 10px;
    }
    span {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
}
@for $i from 1 through $howManySteps {
	$stepName: ($i*(100 / $howManySteps));

	@if $i <= ($howManySteps/2) { 
		.progress[data-percentage="#{$stepName}"] {
			.progress-right .progress-bar {
				 animation: loading-#{$i} $animationTime linear forwards;
			}
			.progress-left .progress-bar {animation: 0;}
		}
	}
	//animation only the right side if above 50%
	@if $i > ($howManySteps/2)  {  
		.progress[data-percentage="#{$stepName}"] {
			.progress-right .progress-bar {
				animation: loading-#{($howManySteps/2)} $animationTime linear forwards; //set the animation to longest animation
			}
			.progress-left .progress-bar {
      animation: loading-#{$i - ($howManySteps/2)} $animationTime linear forwards $animationTime;
    }
		}
	}
}
//animation
@for $i from 1 through ($howManySteps/2) { 
	$degrees: (180/($howManySteps/2));
	$degrees: ($degrees*$i);
	@keyframes loading-#{$i}{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate($degrees);
			transform: rotate(#{$degrees}deg);
    }
	}
}
//additional styling
.progress {
		margin-bottom: 1em;
	}
</style>
