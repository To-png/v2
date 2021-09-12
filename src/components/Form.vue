<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Автомобиль" v-model="title">
    <input type="text" placeholder="Вид мойки" v-model="body">
    <button type="submit">Оформить</button>
  </form>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data() {
      return {
        title: '',
        body: ''
      };
    },
    methods: {
      ...mapMutations(['createPost']),
      submit() {
        this.createPost({
          title: this.title,
          body: this.body,
          id: Date.now()
        })
        this.title = this.body = '';
      }
    }
  }
</script>

<style scoped>
  input {
    display: block;
    width: 300px;
    border: 1px solid #001529;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 25px;
  }
  button {
    display: block;
    width: 150px;
    height: 40px;
    border-radius: 4px;
    background-color: #1890ff;
    color: aliceblue;
  }
</style>