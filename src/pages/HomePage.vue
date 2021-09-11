<template>
    <a-layout class='layout'>
        <SideBar />
        <a-layout>
            <HeaderPage />
            <HomeContent />
            <FooterPage />
        </a-layout>
    </a-layout>
</template>

<script>
    import SideBar from '@/UI/SideBar';
    import HeaderPage from '@/UI/HeaderPage';
    import HomeContent from '@/content/HomeContent';
    import FooterPage from '@/UI/FooterPage';

    export default {        
        components: {
            SideBar,        
            HeaderPage,
            HomeContent,
            FooterPage
        }
    };
</script>

<style>
    .layout {
        min-height: 100vh
    }
</style>
