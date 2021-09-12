<template>
  <div>
    <div class="circle">
      <a-progress type="circle" :percent="percent" :width="200" />
    </div>
    <div>
      <a-button-group>
        <a-button icon="minus" @click="decline" />
        <a-button icon="plus" @click="increase" />
      </a-button-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        percent: 70,
      };
    },
    methods: {
      increase() {
        let percent = this.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.percent = percent;
      },
      decline() {
        let percent = this.percent - 10;
        if (percent < 0) {
          percent = 0;
        }
        this.percent = percent;
      },
    },
  };
</script>

<style scoped> 
  .circle {
    margin-bottom: 30px; 
  }
</style>
