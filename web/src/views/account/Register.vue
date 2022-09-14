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
        .matches(passRegex, 'Password must be at least 8 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, one numeric digit, and one special character.')
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
    <div class="card m-3">
        <h4 class="card-header">Register</h4>
        <div class="card-body">
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="form-group">
                    <label>Name</label>
                    <Field name="name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }" />
                    <div class="invalid-feedback">{{ errors.name }}</div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <Field name="username" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <Field name="password" type="password" class="form-control"
                        :class="{ 'is-invalid': errors.password }" />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" :disabled="isSubmitting">
                        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        Register
                    </button>
                    <router-link to="login" class="btn btn-link">Cancel</router-link>
                </div>
            </Form>
        </div>
    </div>
</template>
    