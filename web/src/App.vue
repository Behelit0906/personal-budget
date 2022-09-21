<script setup>
import Nav from './components/Nav.vue';
import Alert from './components/Alert.vue';
import { useAuthStore } from './stores';

const authStore = useAuthStore();
</script>

<template>
    <Nav />
    <Alert />
    <router-view />
</template>

<style>
body {
    background-color: #4ecca3;
}
</style>
