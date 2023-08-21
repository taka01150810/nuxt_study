<template>
  <div>
    ブログ用のレイアウト
    <Nuxt />
  </div>
</template>

<script>
// pagesやlayouts内ファイルにミドルウェア名追記
export default {
  middleware: 'middlewareCheck'
}
</script>

<style>

</style>