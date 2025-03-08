<template>
  <DataTable :value="new Array(5)">
    <template #header>
      <div class="flex flex-wrap items-center justify-between gap-2 py-4">
        <Skeleton width="6rem" height="2rem" />
        <div class="flex items-center gap-2">
          <Skeleton borderRadius="8px" height="2.25rem" width="12rem" />
          <Skeleton borderRadius="16px" height="2.25rem" width="6rem" />
        </div>
      </div>
    </template>
    <Column v-for="n in 4" :key="n">
      <template #header>
        <Skeleton width="3rem" height="2rem" />
      </template>
      <template #body>
        <Skeleton height="1.5rem" />
      </template>
    </Column>
    <template #footer>
      <Skeleton width="12rem" height="1.5rem" class="m-auto" />
    </template>
  </DataTable>
</template>
<script setup lang="ts"></script>
