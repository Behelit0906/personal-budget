<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useRoute } from 'vue-router';

import { useUserStore, useAlertStore } from '../../stores';
import { router } from '../../router';
import { onMounted, ref, computed } from 'vue';

const userStore = useUserStore();
const alertStore = useAlertStore();
const route = useRoute();
const id = route.params.id;
const operation = ref({});
let title = computed(() => {
    return id ? 'Edit operation' : 'Add operation';
});


onMounted(async () => {
    if (id) {
        const temp = await userStore.getOperationById(id);
        if (!temp.data.length)
            await router.push('/operations');

        else {
            temp.data[0].date = temp.data[0].date.match(/[0-9]*-[0-9]*-[0-9]*/g);
            operation.value = temp.data[0];
        }
    }
});

</script>

<template>
    <div class="operation-container">
        <h1 class="header">{{title}}</h1>
        <Form class="form">
            <div>
                <p class="gray-font">Name</p>
                <Field class="input" name="name" type="text" v-model="operation.name" />
                <div class="feedback gray-font"></div>
            </div>
            <div>
                <p class="gray-font">Amount</p>
                <Field class="input" name="amount" type="number" v-model="operation.amount" />
                <div class="feedback gray-font"></div>
            </div>
            <div>
                <p class="gray-font">Date</p>
                <Field class="input" name="date" type="date" v-model="operation.date" />
                <div class="feedback gray-font"></div>
            </div>
            <div>
                <label class="gray-font">Type </label>
                <Field name="type" as="select" class="select" v-model="operation.type">
                    <option class="select" value="Income">Income</option>
                    <option class="select" value="Egress">Egress</option>
                </Field>
                <div class="feedback gray-font"></div>
            </div>
            <button class="button">Save</button>
        </Form>
    </div>

</template>

<style scoped>
.form {
    margin-left: 30px;
    margin-right: 30px;
}

.operation-container {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.select {
    font-weight: 300;
}
</style>
