<template>
  <canvas id="world"/>
</template>

<script>
/* eslint-disable */
import "../phina/MainScene.js"

export default {
  name: 'PhinaCanvas',
  props: {
  },
  mounted() {
    const app = GameApp({
      startLabel: 'main'
    });
    app.run();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
