<template>  <!--定义HTML模板 -->
  <div id="app">
    <nav>
      <router-link to="/">vue Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <h1>{{message}}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        message:"Hello vue"
      }
    }
  }
</script>

<style>  /*定义CSS样式*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
