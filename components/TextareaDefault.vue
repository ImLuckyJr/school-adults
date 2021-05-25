<template>
    <div role="group">
        <label
            v-if="label"
            @click="$refs[refName].focus()"
        >{{ label }}</label>
        <v-textarea
            :value="value"
            :ref="refName"
            class="dark-border"
            :placeholder="placeholder"
            @input="val => $emit('input', val)"
            solo
        ></v-textarea>
    </div>
</template>

<script>
export default {
    name:  'TextareaDefault',
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
            default: 'TextareaDefault',
        },
        
        type: {
            type:    String,
            default: 'text',
        },
        
        inputClasses: {
            type:    String,
            default: '',
        },
    },
    data() {
        return {};
    },
};
</script>

<style scoped>

</style>