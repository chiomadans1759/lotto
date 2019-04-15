<template>
  <div>
    <hero></hero>
    <welcome-note></welcome-note>
    <trending-games></trending-games>
    <top-games></top-games>
    <navigation></navigation> 
  </div>
</template>

<script>
import Hero from "@/components/Landing/Hero.vue";
import WelcomeNote from "@/components/Landing/WelcomeNote.vue";
import TrendingGames from "@/components/Landing/TrendingGames.vue";
import TopGames from "@/components/Landing/TopGames.vue";
import Navigation from "@/components/Landing/Navigation.vue"; 

export default {
  name: "components",
  components: { Hero, WelcomeNote, TrendingGames, TopGames, Navigation }
};
</script>
