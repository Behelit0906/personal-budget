<script setup>
import { useAlertStore } from '../stores';
import { storeToRefs } from 'pinia';

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<template>
    <div v-if="alert" class="alert-container" :class="alert.type">
        {{alert.message}}
        <div @click="alertStore.clear()" class="alert-button">&times;</div>
    </div>
</template>

<style scoped>
.alert-container {
    width: fit-content;
    margin: 10px auto;
    top: 20px;
    padding: 10px 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-align: center;
    border-radius: 10px;
}

.alert-button {
    display: inline-block;
    margin-left: 10px;
    font-size: 1.5rem;
    cursor: pointer;
}

.alert-success {
    background-color: #D1ECF1;
    color: #329FD5;
}

.alert-danger {
    background-color: #F8D7DA;
    color: #AE3C24;
}
</style>