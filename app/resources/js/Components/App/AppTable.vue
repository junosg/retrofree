<template>
    <section class="app-table" :class="$attrs['class']">
        <slot name="header">{{ props.label }}</slot>
        <table>
            <thead>
                <tr>
                    <td v-for="(column, index) in columns" :key="index">{{ column.label }}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <td v-for="(column, columnIndex) in columns" :key="columnIndex">
                        <slot :name="column.key" :data="row" :index="columnIndex">
                            {{ row[column.key] }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    <slot name="footer"></slot>
</template>
<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
    inheritAttrs: false
});

type ColumnItem = {
    key: string,
    label: string
}

type TableProps = {
    rows?: Array<Record<string, any>>,
    columns?: Array<ColumnItem>,
    label?: string
}

const props = defineProps<TableProps>();

const rows = computed(() => {
    return props.rows ?? [];
});

const columns = computed(() => {
    if (props.columns) {
        return props.columns
    } else if (props.rows && props.rows.length > 0) {
        return Object.entries(props.rows[0])?.map((entry) => {
            return {
                key: entry[0],
                label: entry[0].toUpperCase()
            }
        });
    } else {
        return [];
    }
});

</script>
<style scoped>
</style>
