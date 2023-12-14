<script setup lang="ts">
import MultiSelect from 'primevue/multiselect';
import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';

const ingredient = ref('');
const datetime24h_1 = ref();
const datetime24h_2 = ref();
const selectedstatus = ref();
const status = ref([
    { name: '作業中', code: 'NY' },
]);
const loading = ref(false);
const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};


</script>

<template>
    <div class="card p-fluid">
        <h5>検索条件</h5>

        <div class="field grid">
            <label for="ID" class="fixed-label-width">test</label>
            <div class="col-12 md:col-10">
                <InputText id="ID" type="text" />
            </div>
        </div>
        <div class="field grid">
            <label for="status" class="fixed-label-width">ステータス</label>
            <div class="col-12 md:col-10">
                <MultiSelect v-model="selectedstatus" display="chip" :options="status" optionLabel="name" placeholder="選択"
                    :maxSelectedLabels="3" />
            </div>
        </div>

        <div class="field grid">
            <label for="ingredient1" class="fixed-label-width">区分</label>
            <div class="col-12 md:col-10">
                <div class="radio-button-group flex align-items-center justify-between">
                    <div class="flex-auto">
                        <RadioButton v-model="ingredient" inputId="ingredient1" name="Examination Category" value="指定なし" />
                        <label for="ingredient1" class="ml-2">指定なし</label>
                    </div>
                    <div class="flex-auto">
                        <RadioButton v-model="ingredient" inputId="ingredient2" name="Examination Category" value="初回" />
                        <label for="ingredient2" class="ml-2">初回</label>
                    </div>
                    <div class="flex-auto">
                        <RadioButton v-model="ingredient" inputId="ingredient3" name="Examination Category" value="変更" />
                        <label for="ingredient3" class="ml-2">変更</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.fixed-label-width {
    width: 150px;
}

.button-wrapper {
    display: flex;
    justify-content: flex-end;
}

.narrow-button {
    width: 100px;
}
</style>