<template>
    <div role="group">
        <label
            v-if="label"
            @click="$refs[refName].focus()"
        >{{ label }}</label>
        <v-select
            :ref="refName"
            :class="getClasses"
            :hide-details="hideDetails"
            :items="options"
            :placeholder="placeholder"
            :readonly="readonly"
            :rules="rules"
            :value="value"
            item-text="label"
            item-value="value"
            single-line
            @input="val => $emit('input', val)"
        />
    </div>
</template>

<script>
export default {
    name:  'SelectDefault',
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
        
        inputClasses: {
            type:    String,
            default: '',
        },
        
        appendIcon: {
            type:    String,
            default: '',
        },
        
        darkBorder: {
            type:    Boolean,
            default: false,
        },
        
        readonly: {
            type:    Boolean,
            default: false,
        },
        
        hideDetails: {
            type:    Boolean,
            default: false,
        },
        
        rules: {
            type:    Array,
            default: () => [],
        },
        
        options: {
            type:    Array,
            default: () => [],
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
    methods:  {
        focus() {
            if (this.$refs[this.refName]) this.$refs[this.refName].focus();
        },
    },
};
</script>

<style scoped>

</style>