<template>
    
        <div class="product">
            <img :src="details.thumb" alt="comic">
            <h3>{{details.series}}</h3>
        </div>
</template>

<script>
export default {
  name: 'Comiccard',
    props: {
        details: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    
    .product{
        margin: 30px auto;
        text-align: center;
        width: 15%;
    }
</style>