<template>
  <div>
    bookファイルです
    <NuxtChild 
    :books="books"
    @add-book-list="addBook"
    />
  </div>
</template>

<script>

const STORAGE_KEY = 'books'

export default {
  data(){
    return {
      books: [],
      newBook: null
    }
  },
  // DOM更新前に実施するため変更
  created() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  },
  methods: {
    addBook(e) {
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readDate: '',
        memo: ''
      });
      this.saveBooks();
      // 最後に追加したidの取得コード
      // console.log(this.books.slice(-1)[0].id)
      this.goToEditPage(this.books.slice(-1)[0].id)
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    goToEditPage(id){
      this.$router.push(`/book/edit/${id}`)
    }
  }
}
</script>

<style>

</style>