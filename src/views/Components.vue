<template>
    <div>
        <hero></hero>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
    </div>
</template>
<script>
import Hero from "@/components/Hero";
import BasicElements from "@/components/BasicElements";
import Inputs from "@/components/Inputs";
import CustomControls from "@/components/CustomControls";
import Navigation from "@/components/Navigation";


export default {
  name: "components",
  components: {
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
  }
};
</script>
