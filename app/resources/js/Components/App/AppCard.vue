<template>
    <fieldset class="app-card" :class="$attrs['class']">
        <legend class="app-card-label" v-if="props.label">{{ props.label }}</legend>
        <slot></slot>
    </fieldset>
</template>
<script setup lang="ts">
defineOptions({
    inheritAttrs: false
});

type CardProps = {
    label?: string
}

const props = defineProps<CardProps>();
</script>
