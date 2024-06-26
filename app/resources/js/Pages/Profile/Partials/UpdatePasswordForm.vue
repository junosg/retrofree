<script setup lang="ts">
import AppButton from '@/Components/App/AppButton.vue';
import AppInput from '@/Components/App/AppInput.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value?.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value?.focus();
            }
        },
    });
};
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium">Update Password</h2>

            <p class="mt-1 text-sm">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form @submit.prevent="updatePassword" class="mt-6 space-y-6">
            <div>
                <AppInput
                    label="Current Password"
                    v-model="form.current_password"
                    v-bind:error="form.errors.current_password"
                    placeholder="current password"
                    type="password"
                />
            </div>

            <div>
                <AppInput
                    label="New Password"
                    v-model="form.password"
                    v-bind:error="form.errors.password"
                    placeholder="new password"
                    type="password"
                />
            </div>

            <div>
                <AppInput
                    label="Confirm Password"
                    v-model="form.password_confirmation"
                    v-bind:error="form.errors.password_confirmation"
                    placeholder="confirm password"
                    type="password"
                />
            </div>

            <div class="flex items-center gap-4">
                <AppButton color="success" :disabled="form.processing">Save</AppButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
