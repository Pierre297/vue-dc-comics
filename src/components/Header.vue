<template>
  <header>
      <img src="../assets/dc-logo.png" alt="DC logo">
      <nav>
        <ul>
          <li v-for="link, i in links" :key="i">
            <a :href="link.url">{{link.text}}</a>
            </li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      links: [
        {
        text: "Characters",
        url: "#",
        here: false,
        },
        {
        text: "Comics",
        url: "#",
        here: false,
        },
        {
        text: "Movies",
        url: "#",
        here: false,
        },
        {
        text: "Tv",
        url: "#",
        here: false,
        },
        {
        text: "Games",
        url: "#",
        here: false,
        },
        {
        text: "Videos",
        url: "#",
        here: false,
        },
        {
        text: "Fans",
        url: "#",
        here: false,
        },
        {
        text: "News",
        url: "#",
        here: false,
        },
        {
        text: "Shop",
        url: "#",
        here: false,
        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

header{
  margin-bottom: 20px;
}
  nav {
    display: inline-block;
    vertical-align: top;
    margin-top: 30px;
  }

  nav a:link {
    text-decoration: none;
    color: black;
  }

  nav ul {
    margin-left: 250px;
  }
  nav li {
    list-style-type: none;
    display: inline;
    margin: 10px;
  }
</style>
