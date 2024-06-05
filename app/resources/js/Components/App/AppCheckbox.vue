<template>
    <div class="app-checkbox" :class="$attrs['class']">
        <input class="app-checkbox-field" v-model="model" type="checkbox"/>
        <label v-if="props.label">{{ props.label }}</label>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    inheritAttrs: false
});

type CheckboxProps = {
    label?: string
}

const props = defineProps<CheckboxProps>();
const model = defineModel();
</script>
