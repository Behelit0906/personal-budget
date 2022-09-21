<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useUserStore, useAlertStore } from '../../stores';
import { router } from '../../router';

const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
const schema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .matches(passRegex, 'Password must be at least 8 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.'),
    password_confirmation: Yup.string().required('Passwords must match')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

async function onSubmit(values) {
    const userStore = useUserStore();
    const alertStore = useAlertStore();
    try {
        await userStore.register(values);
        await router.push('/account/login');
        alertStore.success('Registration successful');
    } catch (error) {
        alertStore.error(error);
    }
}
</script>
    
<template>
    <h4 class="header">Register</h4>
    <Form class="form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div>
            <p class="gray-font">Name</p>
            <Field class="input" name="name" type="text" />
            <div class="feedback">{{ errors.name }}</div>
        </div>
        <div>
            <p class="gray-font">Email</p>
            <Field class="input" name="email" type="text" />
            <div class="feedback">{{ errors.email }}</div>
        </div>
        <div>
            <p class="gray-font">Password</p>
            <Field class="input" name="password" type="password" />
            <div class="feedback">{{ errors.password }}</div>
        </div>
        <div>
            <p class="gray-font">Password</p>
            <Field class="input" name="password_confirmation" type="password" />
            <div class="feedback">{{ errors.password_confirmation }}</div>
        </div>
        <button class="button">Register</button>
        <router-link to="login" class="link gray-font">Or Sign In</router-link>
    </Form>
</template>

<style scoped>
.form {
    margin-left: 30px;
    margin-right: 30px;
}
</style>
    