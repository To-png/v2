<template>      
    <a-layout-header class='header'>
        <div style='text-align: right'>
            <DangerButton style='margin-right: 30px'/>            
            <UserButton />                   
        </div>
    </a-layout-header>      
</template>

<script>
    import DangerButton from '@/components/DangerButton.vue';
    import UserButton from '@/components/UserButton.vue';

    export default {
        components: { 
            DangerButton, 
            UserButton 
        },         
    };
</script>
    
<style>
    .header {
        background: #001529
    }
</style>
