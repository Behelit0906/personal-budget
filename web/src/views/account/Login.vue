<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '../../stores';

const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
const schema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').matches(passRegex, 'Password must be at least 8 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.')
});

async function onSubmit(values) {
    const authStore = useAuthStore();
    const { email, password } = values;
    await authStore.login(email, password);
}
</script>
Password must be at least 8 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.
<template>
    <h4 class="header">Login</h4>
    <Form class="form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div>
            <p class="gray-font">Email</p>
            <Field class="input" name="email" type="text" :class="{ 'is-invalid': errors.email }"
                placeholder="Type your email" />
            <div class="feedback gray-font">{{ errors.email }}</div>
        </div>
        <div>
            <p class="gray-font">Password</p>
            <Field class="input" name="password" type="password" :class="{ 'is-invalid': errors.password }"
                placeholder="Type your password" />
            <div class="feedback gray-font">{{ errors.password }}</div>
        </div>
        <button class="button">Login</button>
        <router-link to="register" class="link gray-font">Or Sign Up</router-link>
    </Form>
</template>

<style scoped>
.form {
    margin-left: 30px;
    margin-right: 30px;
}
</style>