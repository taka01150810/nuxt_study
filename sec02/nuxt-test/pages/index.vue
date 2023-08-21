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

  /*
  asyncDataとfetchの違いは特になし
  動作的にはほぼ同じ
  役割を分けてコードを読みやすくするため
  */
 
  asyncData( { route, isDev, app, $axios } ){
    console.log('=================')
    console.log('asyncDataです')
    console.log('route.name:', route.name)
    console.log('isDev:', isDev)
    console.log('app:', app)
    console.log('app.$axios:', app.$axios)
    console.log('$axios:', $axios)
    console.log('=================')
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
