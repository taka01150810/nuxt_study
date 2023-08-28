<template>
  <div> 
    {{ books[$route.params.id] }}
    {{ books[$route.params.id].title }}
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      default: ()=>{}
    }
  },
}
</script>

<style>

</style>