<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';
import { FilterMatchMode } from 'primevue/api';
import { onMounted, ref } from 'vue';

const dataStore = useDataStore();
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  projectId: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  developerId: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  facilityId: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});
const loading = ref(true);

onMounted(async () => {
  await dataStore.fetchData();
  loading.value = false;
});
</script>

<template>
  <div class="card">
    <DataTable v-if="dataStore.data.length" v-model:filters="filters" :value="dataStore.data" scrollable
      scrollHeight="700px" filterDisplay="row" :loading="loading"
      :globalFilterFields="['projectId', 'developerId', 'facilityId']">
      <template #header>
        <div class="flex justify-content-end">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </span>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>

      <Column field="projectId" sortable header="階層_ID">
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"
            placeholder="Search by ID" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>



<style scoped>
table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
}

th,
td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #eceeef;
}

thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #eceeef;
}

tbody+tbody {
  border-top: 2px solid #eceeef;
}

table th,
table td {
  border: 1px solid #eceeef;
}

table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
