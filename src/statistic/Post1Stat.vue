<template>    
  <a-layout-content>         
    <div :style="{ padding: '24px', background: '#7998A9', height: '100%' }">
      <h2 class='heading'>Статистика по расходным материалам</h2>             
      <a-row type="flex" justify="space-around" align="top">
        <a-col :span="8" class="consumable">
          <h2 class="title">Пена</h2>  
          <Dashboard />      
        </a-col>       
        <a-col :span="8" class="consumable">
          <h2 class="title">Вода</h2>          
          <Dashboard />
        </a-col>        
        <a-col :span="8" class="consumable">
          <h2 class="title">Воск</h2>         
          <div>
            <Dashboard />
          </div>
        </a-col>        
      </a-row>     
    </div>
  </a-layout-content>      
</template>

<script> 
import Dashboard from '@/components/Dashboard'

  export default {
    components: { 
      Dashboard 
    },    
  };
</script>

<style scoped> 
  .heading {
    text-align: center;
    padding: 30px;
  }  
  .consumable {
    text-align: center;
    display: block;
    width: 300px;
    height: 370px;
    background-color: #fff;
    border: 1px solid #001529;
    border-radius: 4px;
    padding: 20px; 
    margin-bottom: 30px;   
  }  
  .title {
    margin-bottom: 20px; 
  }  
</style>