<template>
  <div>
    aboutです
    <template>{{ now }}</template><br>
    <img src="~/assets/images/head_cake.jpg"><br>
    <div class="red-b">assets/cssのテスト</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      now: null
  }},
  mounted(){
    this.now = this.$dayjs().format('YYYY-MM-DD:HH:mm:ss')
  }
}
</script>

<style>

</style>