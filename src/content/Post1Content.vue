<template>    
    <a-layout-content>         
        <div :style="{ padding: '24px', background: '#7998A9', height: '100%' }">
            <h2 class='heading'>Зарегистрировано клиентов сегодня = {{postsCount}}</h2>            
             <a-row type="flex" justify="space-around" align="top">
                <a-col :span="8">
                    <Form />
                </a-col>
                <a-col :span="14">
                    <div class="post" v-for="post in validPosts" :key="post.id">
                        <h1>{{post.title}}</h1>
                        <p>{{post.body}}</p>
                    </div>   
                </a-col>
            </a-row>                   
        </div>
    </a-layout-content>      
</template>

<script> 
    import {mapGetters, mapActions} from 'vuex';
    import Form from '@/components/Form'

    export default {        
        computed: mapGetters(['validPosts', 'postsCount']),
        methods: mapActions(['fetchPosts']),
        components: {
            Form
        },
        async mounted() {            
            this.fetchPosts(2);
        }
    }
</script>

<style>
    .line {
        border-color: #001529
    }
    .heading {
        text-align: center;
        padding: 30px;        
    }
    .post {
        display: block;
        width: 500px;
        background-color: #fff;
        border: 1px solid #001529;
        border-radius: 4px;
        padding: 30px;
        margin-bottom: 15px;
    }
</style>
