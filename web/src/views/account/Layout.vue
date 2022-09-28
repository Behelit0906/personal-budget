<script setup>
import { useAuthStore } from '../../stores';
import { router } from '../../router';

// redirect home if already logged in
const authStore = useAuthStore();
if (authStore.user) {
    router.push('/');
}
</script>
    
<template>
    <div class="account-container">
        <router-view />
    </div>
</template>

<style>
.account-container {
    max-width: 340px;
    margin: 5% auto;
    padding-top: 1%;
    padding-bottom: 5%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    border-radius: 5px;
    background-color: #ffffff;
}

.header {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
}

.input {
    width: 98%;
    margin-bottom: 10px;
    padding: 5px 5px 5px 0;
    border: none;
    font-weight: 300;
    border-bottom: 1px solid #757575;
}

.gray-font {
    color: #757575;
}

.feedback {
    margin-bottom: 5px;
    font-size: 0.8rem;
}

.button {
    display: block;
    width: 70%;
    margin: 15% auto 10% auto;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: #4ecca3;
    cursor: pointer;
}

.link {
    display: block;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5%;

}

.input:focus {
    outline: none;
}
</style>