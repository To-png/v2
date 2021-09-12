<template>
  <a-layout class='layout'>
    <SideBar />
    <a-layout>
      <HeaderPage />
      <Post1Stat />
      <FooterPage />
    </a-layout>
  </a-layout>
</template>

<script>
  import SideBar from '@/UI/SideBar';
  import HeaderPage from '@/UI/HeaderPage'; 
  import Post1Stat from '@/statistic/Post1Stat.vue'; 
  import FooterPage from '@/UI/FooterPage';  

  export default {    
    components: {
      SideBar,        
      HeaderPage, 
      Post1Stat,     
      FooterPage      
    }
  };
</script>

<style>
  .layout {
    min-height: 100vh
  }
</style>
