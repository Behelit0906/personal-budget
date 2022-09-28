<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useRoute } from 'vue-router';

import { useUserStore, useAlertStore } from '../../stores';
import { router } from '../../router';
import { onMounted, ref } from 'vue';

const userStore = useUserStore();
const alertStore = useAlertStore();
const route = useRoute();
const id = route.params.id;
const operation = ref(null);
let title = 'Add operation';



onMounted(async () => {
    if (id) {
        const temp = await userStore.getOperationById(id);
        if (!temp.data.length)
            await router.push('/operations');

        else {
            operation.value = temp.data;
            title = 'Edit operation';
        }
    }
});

</script>

<template>

</template>
