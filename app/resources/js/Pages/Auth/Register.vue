<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppInput from '@/Components/App/AppInput.vue';
import AppButton from '@/Components/App/AppButton.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <GuestLayout label="Sign Up">
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div class="flex flex-col justify-center gap-4 align-middle">
                <AppInput label="Name" v-model="form.name" v-model:error="form.errors.name" placeholder="name"/>
                <AppInput label="Email" v-model="form.email" v-model:error="form.errors.email" placeholder="email"/>
                <AppInput label="Password" v-model="form.password" v-model:error="form.errors.password" placeholder="password" type="password"/>
                <AppInput label="Confirm Password" v-model="form.password_confirmation" v-model:error="form.errors.password_confirmation" placeholder="confirm password" type="password"/>
            </div>
            <div class="flex items-center justify-end gap-2 mt-4">
                <Link
                    :href="route('login')"
                    class="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>

                <AppButton color="default" size="md">
                    Register
                </AppButton>
            </div>
        </form>
    </GuestLayout>
</template>
