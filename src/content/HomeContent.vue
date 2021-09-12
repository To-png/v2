<template>    
    <a-layout-content>         
        <div :style="{ padding: '24px', background: '#7998A9', height: '100%' }">
            <h2 class='heading'>Мы открылись!</h2>               
            <a-row type="flex" justify="space-around" align="middle" class="row">
                <a-col :span="10">
                   <div v-for="post in allPosts" :key="post.id">                        
                        <h1>{{post.body}}</h1>
                    </div> 
                </a-col>
                <a-col :span="12">
                    <img class='posts' alt="Car posts" src="../assets/posts.png">
                </a-col>
            </a-row>                           
        </div>
    </a-layout-content>      
</template>

<script> 
     import {mapGetters, mapActions} from 'vuex';
     
      export default {        
        computed: mapGetters(['allPosts']),
        methods: mapActions(['fetchPosts']),
      
        async mounted() {            
            this.fetchPosts(2);
        }
    }
</script>

<style>
    .posts {
        height: 250px
    }
    .heading {
        text-align: center;
        padding: 30px;
    }
    .row {
        padding: 20px;
    }
</style>
