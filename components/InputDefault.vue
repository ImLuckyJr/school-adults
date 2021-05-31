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
            :counter="counter"
            :rules="rules"
            solo
            @input="val => $emit('input', val)"
        >
            <template v-slot:append>
                <v-icon
                    v-if="appendIcon"
                    @click="$emit('click-append-icon')"
                >{{ appendIcon }}
                </v-icon>
                <slot name="append"></slot>
            </template>
        </v-text-field>
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
        
        appendIcon: {
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
        
        counter: {
            type:    Number,
            default: null,
        },
        
        rules: {
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