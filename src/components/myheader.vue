<template>
    <div class="myheader">{{txt}}</div>
</template>

<script>
    export default {
      name: "myheader",
      props:['txt']
    }
</script>

<style scoped>
.myheader{
  background-color: darkturquoise;
  padding: 10px;
  color: white;
  font-size: 16px;
  text-align: center;
}
</style>
