<template>  
    <a-layout-sider v-model="collapsed" collapsible>
        <div> 
            <img class='logo' alt="Car wash logo" src="../assets/logo.png">        
        </div>
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
            <a-menu-item key="1" @click="$router.push({ name: 'home' })">
                <a-icon type="home" />
                <span>Главная</span>
            </a-menu-item>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="car" /><span>Пост 1</span></span>
                <a-menu-item key="2" @click="$router.push({ name: 'post1' })">
                    <a-icon type="form" />
                    Регистрация
                </a-menu-item>
                <a-menu-item key="3" @click="$router.push({ name: 'stat1' })">
                    <a-icon type="bar-chart" />
                    Статистика
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <span slot="title"><a-icon type="car" /><span>Пост 2</span></span>
                <a-menu-item key="4" @click="$router.push({ name: 'post2' })">
                    <a-icon type="form" />
                    Регистрация
                </a-menu-item>
                <a-menu-item key="5" @click="$router.push({ name: 'stat2' })">
                    <a-icon type="bar-chart" />
                    Статистика
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="car" /><span>Пост 3</span></span>
                <a-menu-item key="6" @click="$router.push({ name: 'post3' })">
                    <a-icon type="form" />
                    Регистрация
                </a-menu-item>
                <a-menu-item key="7" @click="$router.push({ name: 'stat3' })">
                    <a-icon type="bar-chart" />
                    Статистика
                </a-menu-item>
            </a-sub-menu>   
            <a-sub-menu key="sub5">
                <span slot="title"><a-icon type="car" /><span>Пост 4</span></span>
                <a-menu-item key="8" @click="$router.push({ name: 'post4' })">
                    <a-icon type="form" />
                    Регистрация
                </a-menu-item>
                <a-menu-item key="9" @click="$router.push({ name: 'stat4' })">
                    <a-icon type="bar-chart" />
                    Статистика
                </a-menu-item>
            </a-sub-menu>        
        </a-menu>
    </a-layout-sider>    
</template>

<script>
    export default {        
        data() {
            return {
            collapsed: false,
            };
        },
    };
</script>

<style>
    .logo {
        height: 40px; 
        margin: 20px
    }
</style>
