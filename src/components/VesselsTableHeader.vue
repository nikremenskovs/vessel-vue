<script lang="ts" setup>
const { filters, summaryChips, expandedRows } = storeToRefs(useVesselsStore())
const { execute, clearGlobalFilter } = useVesselsStore()
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-2 py-4">
    <div class="flex items-center gap-4">
      <h1 class="text-2xl font-bold">Vessels</h1>
      <div class="space-x-1">
        <Chip
          v-for="chip in summaryChips"
          :key="chip.name"
          :label="`${chip.count}`"
          :icon="chip.icon"
          v-tooltip.bottom="`${chip.tooltip}`"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <IconField>
        <InputIcon>
          <i class="fa-solid fa-magnifying-glass" />
        </InputIcon>
        <InputText v-model="filters['global'].value" placeholder="Search.." />
        <InputIcon v-show="filters.global.value" class="cursor-pointer" @click="clearGlobalFilter">
          <i class="fa-solid fa-circle-xmark" />
        </InputIcon>
      </IconField>
      <Button
        :disabled="!expandedRows.length"
        @click="expandedRows = []"
        icon="fa-solid fa-minus"
        size="small"
        rounded
        raised
        outlined
        label="Collapse All"
      />
      <Button
        @click="() => execute()"
        icon="fa-solid fa-rotate-right"
        size="small"
        rounded
        raised
        outlined
        label="Refresh"
      />
    </div>
  </div>
</template>
