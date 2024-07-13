<template>  <!--定义HTML模板 -->
  <div>
<!--    <h1>{{message}}</h1>-->
    <element-view>

    </element-view>
  </div>
</template>

<script>
  import ElementView from "@/views/Element/elementLearn.vue";

  export default {
    components: {ElementView},
    data(){
      return{
        message:"Hello vue"
      }
    }
  }
</script>

<style>  /*定义CSS样式*/

</style>
