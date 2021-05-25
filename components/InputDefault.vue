<template>
    <div role="group">
        <label
            v-if="label"
            @click="$refs[refName].focus()"
        >{{ label }}</label>
        <v-text-field
            :ref="refName"
            :class="getClasses"
            :hide-details="hideDetails"
            :placeholder="placeholder"
            :type="type"
            :value="value"
            solo
            @input="val => $emit('input', val)"
        ></v-text-field>
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
        
        inputClasses: {
            type:    String,
            default: '',
        },
        
        darkBorder: {
            type:    Boolean,
            default: false,
        },
        
        hideDetails: {
            type:    Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
    computed: {
        getClasses() {
            const classes = {};
            this.inputClasses.split(' ').forEach(v => {
                classes[v] = true;
            });
            classes['dark-border'] = this.darkBorder;
            
            return classes;
        },
    },
};
</script>

<style scoped>

</style>