<template>
  <a-result status="404" title="404" sub-title="Извините, адреса, который был запрошен, не существует.">
    <template #extra>
      <a-button type="primary" @click="$router.push({ name: 'home' })">
        Перейти на главную
      </a-button>
    </template>
  </a-result>
</template>

<script>
  export default {
    data() {
      return {};
    },    
  };
</script>
