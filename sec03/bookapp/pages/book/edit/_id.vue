<template>
  <div> 
    {{ books[$route.params.id] }}
    {{ books[$route.params.id].title }}
    {{ book.title }}
  </div>
</template>

<script>
export default {
  //ページ遷移時に実行したいのでvue-routerのナビゲーションガードを使う
  beforeRouteEnter(to, from, next){
    next( vm => {
      vm.book = vm.books[vm.$route.params.id]
    })
  },
  props: {
    books: {
      type: Array,
      default: ()=>{}
    }
  },
  data(){
    return {
      book: '',
    }
  }
}
</script>

<style>

</style>