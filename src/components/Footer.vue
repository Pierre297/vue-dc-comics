<template>
  <footer>
    <div id="merch">
    </div>
    <div class="container">
    <div id="dc-links">
      <section>
      <h3>DC COMICS</h3>
      <ul>
        <li>Characters</li>
        <li>Comics</li>
        <li>Movies</li>
        <li>Tv</li>
        <li>Games</li>
        <li>Videos</li>
        <li>News</li>
      </ul>

      <h3>SHOP</h3>
      <ul>
        <li>Shop DC</li>
        <li>Shop Dc Collectibles</li>
      </ul>
      </section>

      <section>
      <h3>DC</h3>
      <ul>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Ad choices</li>
        <li>Advertising</li>
        <li>Jobs</li>
        <li>Subscriptions</li>
        <li>Talent Workshop</li>
        <li>CPSC Certificates</li>
        <li>Ratings</li>
        <li>Shop Help</li>
        <li>Contact Us</li>
      </ul>
      </section>

      <section>
      <h3>SITES</h3>
      <ul>
        <li>DC</li>
        <li>MAD magazines</li>
        <li>DC Kids</li>
        <li>DC Universe</li>
        <li>DC Power Visa</li>
      </ul>
      </section>
    </div>
    <div id="logo">
      <img src="../assets/dc-logo-bg.png" alt="DC logo">
    </div>
    </div>
    <div id="social">
      <button><a href="SIGN-UP NOW!"></a></button>
    </div>


  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#merch {
  background-color: #0282f9;
  height: 150px;
}

.container {
  display: flex;
  justify-content: space-between;
  background-image: url("../assets/footer-bg.jpg");
  height: 300px;
}

#dc-links{
  display: flex;
  flex-wrap: wrap;
}

#dc-links h3{
 color: white;
}

#dc-links li {
  color:#5e6b70 ;
  list-style-type: none;
      margin-right: 42px;

}

#logo img{
  width: 375px;
  margin-right: 130px;
  margin-top: -30px;
  position: rel;
  z-index: 99;
}

#social{
  background-color: #303030;
  height: 100px;
  width: 100%;
  position: relative;
  z-index: 100;
}

</style>