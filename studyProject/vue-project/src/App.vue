<template>  <!--定义HTML模板 -->
  <div>
<!--    <h1>{{message}}</h1>-->
    <router-view></router-view>
  </div>
</template>

<script>
  // import DepView from "@/views/Tlias/DepView.vue";

  export default {
    components: {},
    data(){
      return{
        message:"Hello vue"
      }
    }
  }
</script>

<style>  /*定义CSS样式*/

</style>
