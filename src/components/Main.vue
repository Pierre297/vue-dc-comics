<template>
  <main>
    <h3>-- Content goes Here --</h3>
  </main>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  main{
    background-color: hsl(0deg 0% 11%);
    height: 100px;
    color: white;
    display: flex;
  }

  h3 {
    vertical-align: middle;
    margin: 30px;
  }
</style>