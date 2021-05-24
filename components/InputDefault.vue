<template>
    <div role="group">
        <label
            v-if="label"
            @click="$refs[refName].focus()"
        >{{ label }}</label>
        <b-form-input
            v-model="value"
            :placeholder="placeholder"
            :type="type"
            :ref="refName"
            @input="val => $emit('input', val)"
        ></b-form-input>
    </div>
</template>

<script>
export default {
    name:  'InputDefault',
    props: {
        value: {
            required: true,
        },
        
        label: {
            type:    String,
            default: '',
        },
        
        placeholder: {
            type:    String,
            default: 'Введите данные',
        },
        
        refName: {
            type:    String,
            default: 'InputDefault',
        },
        
        type: {
            type:    String,
            default: 'text',
        },
    },
    data() {
        return {};
    },
};
</script>

<style scoped>

</style>