<template>
    <div class="tw-relative">
        <InputDefault
            :label="label"
            :placeholder="placeholder"
            :ref-name="refName"
            :rules="rules"
            :value="computedDateFormatted"
            dark-border
            @input="val => $emit('input', val)"
        >
            <template v-slot:append>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="0"
                    min-width="auto"
                    offset-y
                    transition="scale-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            icon
                            @click="menu = !menu"
                        >
                            <v-icon>event</v-icon>
                        </v-btn>
                    </template>
                    <v-date-picker
                        :active-picker.sync="activePicker"
                        :max="new Date().toISOString().substr(0, 10)"
                        :value="computedDateFormattedForPicker"
                        min="1950-01-01"
                        @change="save"
                        @input="val => $emit('input', val)"
                    ></v-date-picker>
                </v-menu>
            </template>
        </InputDefault>
    </div>
</template>

<script>
export default {
    name:  'DateDefault',
    props: {
        value: {
            required: true,
        },
        
        rules: {
            type:    Array,
            default: () => [],
        },
        
        label: {
            type:    String,
            default: '',
        },
        
        placeholder: {
            type:    String,
            default: '',
        },
        
        refName: {
            type:    String,
            default: '',
        },
    },
    data() {
        return {
            activePicker: 'YEAR',
            menu:         false,
            date_:        '',
        };
    },
    created() {
        this.date_ = this.value;
    },
    watch:    {
        menu(val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'));
        },
        
        value(newValue) {
            this.date_ = newValue;
        },
    },
    computed: {
        computedDateFormatted: {
            get() {
                console.log('this.slashesToDots(this.value)');
                console.log(this.slashesToDots(this.value));
                // return this.slashesToDots(this.value);
                return this.value;
            },
            set(newValue) {
                try {
                    this.$emit('input', newValue);
                    // this.date_ = this.dotsToSlashes(this.value);
                    this.date_ = this.value;
                }
                catch (err) {
                    console.error('ERROR UPDATE DATE IN INPUT');
                    console.error(err);
                }
            },
        },
        
        computedDateFormattedForPicker: {
            get() {
                console.log('this.dotsToSlashes(this.value)');
                console.log(this.dotsToSlashes(this.value));
                // return this.dotsToSlashes(this.value);
                return this.value;
            },
            set(newValue) {
                try {
                    // this.$emit('input', this.dotsToSlashes(newValue));
                    this.$emit('input', newValue);
                    this.date_ = newValue;
                }
                catch (err) {
                    console.error('ERROR UPDATE DATE IN INPUT');
                    console.error(err);
                }
            },
        },
    },
    methods:  {
        save(date) {
            this.$refs.menu.save(date);
        },
        
        dotsToSlashes(value) {
            if (!value) return null;
            let [ day, month, year ] = [ null, null, null ];
            
            if (/\d{2.\d{2}.\d{4}}/g.test(value)) {
                [ day, month, year ] = value.split('.');
                return `${ year }/${ month }/${ day }`;
            }
            else {
                return value;
            }
        },
        
        slashesToDots(value) {
            if (!value) return null;
            let [ year, month, day ] = [ null, null, null ];
            
            if (/\d{4}-\d{2}-\d{2}/g.test(value)) {
                [ year, month, day ] = value.split('-');
                return `${ day }.${ month }.${ year }`;
            }
            else if (/\d{4}\/\d{2}\/\d{2}/g.test(value)) {
                [ year, month, day ] = value.split('/');
                return `${ day }.${ month }.${ year }`;
            }
            else {
                return value;
            }
        },
        
        // checkDateAndUpdateCurrent(value) {
        //     let result = '';
        //
        //     if (value) {
        //         if (value instanceof Date || Object.prototype.toString.call(value).slice(8, -1) === 'Number') {
        //             let dateTimeString = (value instanceof Date)
        //                                  ? value.toLocaleString()
        //                                  : new Date(value).toLocaleString();
        //
        //             if (/\d{4}-\d{2}-\d{2}/g.test(dateTimeString)) {
        //                 // Дата может быть вида ГГГГ-ММ-ДД, тогда меняем на ДД.ММ.ГГГГ
        //                 result = dateTimeString.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$1/$2/$3');
        //             }
        //             else {
        //                 // Если дата не ГГГГ-ММ-ДД, она может быть ММ/ДД/ГГГГ, заменяем символы
        //                 // result = dateTimeString.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$2.$1.$3');
        //             }
        //         }
        //         else {
        //             if (/\d{4}-\d{2}-\d{2}/g.test(value)) {
        //                 result = value.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$1/$2/$3');
        //             }
        //             else if (/\d{2}.\d{2}.\d{4}/g.test(value)) {
        //                 result = value.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1');
        //             }
        //         }
        //     }
        //
        //     return result;
        // },
    },
};
</script>

<style scoped>

</style>