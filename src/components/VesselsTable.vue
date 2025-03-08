<script setup lang="ts">
import VesselsTableExpansion from '@/components/VesselsTableExpansion.vue'

const { vesselsData, filters, expandedRows } = storeToRefs(useVesselsStore())
const { clearGlobalFilter } = useVesselsStore()
</script>

<template>
  <DataTable
    v-model:filters="filters"
    v-model:expandedRows="expandedRows"
    :value="vesselsData"
    paginator
    :rows="5"
    sortField="vesselName"
    :sortOrder="1"
  >
    <template #header>
      <VesselsTableHeader />
    </template>
    <template #empty>
      <AppInfoBox
        title="No results found"
        description="We couldn't find any results matching the criteria. Please clear the search or refreshing the data"
      >
        <template #actions>
          <Button @click="clearGlobalFilter" label="Clear" icon="fa-solid fa-filter-circle-xmark" />
        </template>
      </AppInfoBox>
    </template>
    <Column expander style="width: 5rem" />
    <Column class="w-1/4" field="vesselName" header="Name" sortable />
    <Column class="w-1/4" field="assetCount" header="Asset count" sortable>
      <template #body="slotProps">
        <Knob
          :modelValue="slotProps.data.assetCount"
          :max="10"
          :size="52"
          :strokeWidth="8"
          readonly
        />
      </template>
    </Column>
    <Column class="w-1/4" field="mailProductState" header="Mail Product" sortable>
      <template #body="slotProps">
        <Tag
          :value="slotProps.data.mailProductState"
          :severity="slotProps.data.mailProductState === 'Live' ? 'success' : 'danger'"
        />
      </template>
    </Column>
    <Column class="w-1/4" field="cyberProductState" header="Cyber Product" sortable>
      <template #body="slotProps">
        <Tag
          :value="slotProps.data.cyberProductState"
          :severity="slotProps.data.cyberProductState === 'Live' ? 'success' : 'danger'"
        />
      </template>
    </Column>
    <template #expansion="slotProps">
      <VesselsTableExpansion
        :vesselName="slotProps.data.vesselName"
        :vesselId="slotProps.data.id"
      />
    </template>
  </DataTable>
</template>
