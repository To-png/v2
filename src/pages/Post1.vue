<template>
  <a-layout class='layout'>
    <SideBar />
    <a-layout>
      <HeaderPage />
      <Post1Content />
      <FooterPage />
    </a-layout>
  </a-layout>
</template>

<script>
  import SideBar from '@/UI/SideBar';
  import HeaderPage from '@/UI/HeaderPage';
  import Post1Content from '@/content/Post1Content.vue';
  import FooterPage from '@/UI/FooterPage';

  export default {    
    components: {
      SideBar,        
      HeaderPage,
      Post1Content,
      FooterPage
    }
  };
</script>

<style>
  .layout {
    min-height: 100vh
  }
</style>
