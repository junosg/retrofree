<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppButton from '@/Components/App/AppButton.vue';
import AppInput from '@/Components/App/AppInput.vue'
import AppCheckbox from '@/Components/App/AppCheckbox.vue';

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>

<template>
    <GuestLayout label="Sign In">
        <Head title="Log in" />

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div class="flex flex-col justify-center gap-4 align-middle">
                <AppInput label="Email" v-model="form.email" v-model:error="form.errors.email" placeholder="email"/>
                <AppInput label="Password" v-model="form.password" v-model:error="form.errors.password" placeholder="password" type="password"/>
                <div class="block">
                    <AppCheckbox label="Remember me" v-model="form.remember" />
                </div>

                <AppButton color="default" size="md" :disabled="form.processing">
                    Login
                </AppButton>
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="text-sm text-center text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>
                <div class="flex flex-row items-center justify-center gap-2">
                    <span>Don't have an account yet?</span>
                    <Link
                        :href="route('register')"
                        class="p-0 m-0 text-sm text-center text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </form>
    </GuestLayout>
</template>
