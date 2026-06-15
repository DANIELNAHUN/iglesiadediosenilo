<template>
  <div class="print-container">
    <div class="a6-grid">
      <A6_Back v-for="n in 4" :key="n" />
    </div>
  </div>
</template>

<script setup>
import A6_Back from './campana_cobresur/A6_Back.vue'
</script>

<style scoped>
.print-container {
  width: 21cm;
  margin: 20px auto;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.a6-grid {
  display: grid;
  grid-template-columns: 10.5cm 10.5cm;
  grid-template-rows: 14.85cm 14.85cm;
}

@media print {
  .print-container {
    box-shadow: none;
    margin: 0;
  }

  .a6-grid :deep(.a6-block) {
    border: none;
  }
}

@media screen {
  .a6-grid {
    border: 2px solid #333;
  }
}
</style>
