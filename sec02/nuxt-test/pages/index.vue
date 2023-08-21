<template>
  <div>
    indexです<br>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLogo/>
    <BaseHeader/>
  </div>
</template>

<script>
export default {

  asyncData(){
    console.log('asyncDataです')
  },

  created(){
    console.log('createdです')
  },

  // 引数なしと引数ありでライフサイクルが異なる
  // 引数なし
  // fetch(){
  //   console.log('fetchです')
  // },

  // 引数あり
  fetch( context ){
    console.log('fetchです')
    console.log(context.route)
    console.log(context.route.name)
  }

}
</script>
