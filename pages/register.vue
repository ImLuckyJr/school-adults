<template>
    <section
        id="register"
        class="section tw-flex tw-flex-row tw-mt-10"
    >
        <div class="tw-w-full tw-mb-32">
            <v-form
                ref="registerForm"
                v-model="formValid"
                lazy-validation
            >
                <div class="title">
                    <h2>Регистрация</h2>
                </div>
                
                <div class="tw-flex tw-flex-row tw-gap-x-32 tw-mb-4">
                    <div class="2xl:tw-w-1/2 xl:tw-w-1/2 lg:tw-w-1/2 md:tw-w-full sm:tw-w-full tw-flex tw-flex-col">
                        <InputDefault
                            v-model="form.lastname"
                            :counter="formLimits.lastname"
                            :rules="formRules.default"
                            dark-border
                            label="Фамилия"
                            placeholder="Введите фамилию"
                            ref-name="lastname"
                        />
                        <InputDefault
                            v-model="form.name"
                            :counter="formLimits.name"
                            :rules="formRules.default"
                            dark-border
                            label="Имя"
                            placeholder="Введите имя"
                            ref-name="name"
                        />
                        <DateDefault
                            v-model="form.birthday"
                            :rules="formRules.birthday"
                            dark-border
                            label="Дата рождения"
                            placeholder="__.__.____"
                            ref-name="birthday"
                        />
                        <SelectDefault
                            v-model="form.gender"
                            :options="genders"
                            dark-border
                            label="Пол"
                            ref-name="gender"
                            placeholder="Выберите пол"
                        />
                    </div>
                    
                    <div class="2xl:tw-w-1/2 xl:tw-w-1/2 lg:tw-w-1/2 md:tw-w-full sm:tw-w-full tw-flex tw-flex-col">
                        <InputDefault
                            v-model="form.email"
                            :counter="formLimits.email"
                            :rules="formRules.email"
                            dark-border
                            label="Email"
                            placeholder="Укажите email"
                            ref-name="email"
                            type="email"
                        />
                        <InputDefault
                            v-model="form.phone"
                            :rules="formRules.default"
                            dark-border
                            label="Телефон"
                            placeholder="+7 (___) ___-__-__"
                            ref-name="phone"
                            mask="+7 (###) ###-##-##"
                        />
                        <InputDefault
                            v-model="form.password"
                            :rules="formRules.password"
                            dark-border
                            label="Пароль"
                            placeholder="Укажите пароль"
                            ref-name="password"
                            type="password"
                            :append-icon="passportFieldType ? 'visibility_off' : 'visibility'"
                            :type="passportFieldType ? 'password' : 'text'"
                            @click-append-icon="passportFieldType = !passportFieldType"
                        />
                        <InputDefault
                            v-model="form.passwordConfirm"
                            :rules="formRules.passwordConfirm"
                            dark-border
                            label="Повторите пароль"
                            placeholder="Укажите пароль"
                            ref-name="passwordConfirm"
                            type="password"
                            :append-icon="passportFieldType ? 'visibility_off' : 'visibility'"
                            :type="passportFieldType ? 'password' : 'text'"
                            @click-append-icon="passportFieldType = !passportFieldType"
                        />
                    </div>
                </div>
                
                <div class="tw-flex tw-flex-row tw-gap-x-32 tw-mb-4">
                    <div class="2xl:tw-w-1/2 xl:tw-w-1/2 lg:tw-w-1/2 md:tw-w-full sm:tw-w-full tw-flex">
                        <div class="btn-auth google">
                            Продолжить с помощью Google
                        </div>
                    </div>
                    
                    <div class="2xl:tw-w-1/2 xl:tw-w-1/2 lg:tw-w-1/2 md:tw-w-full sm:tw-w-full tw-flex">
                        <div class="btn-auth vk">
                            Продолжить с помощью ВКонтакте
                        </div>
                    </div>
                </div>
                
                <div class="tw-flex tw-flex-row tw-mb-4">
                    <div class="tw-w-full">
                        <v-checkbox
                            v-model="form.agreeTerms"
                            class="agree-terms-checkbox"
                            off-icon="check_box_outline_blank"
                            on-icon="check_box"
                        >
                            <template v-slot:label>
                                <div>Я соглашаюсь с <a
                                    href="/agree-terms"
                                    target="_blank"
                                    @click="openAgreeTermsPage"
                                >
                                    политикой конфиденциальности
                                </a>
                                </div>
                            </template>
                        </v-checkbox>
                    </div>
                </div>
                
                <div class="tw-flex tw-flex-row tw-justify-center">
                    <div class="2xl:tw-w-1/3 xl:tw-w-1/3 lg:tw-w-1/3 md:tw-w-1/2 sm:tw-w-full">
                        <Avatar
                            v-model="form.avatar"
                            show-submit-form
                            @submit-form="sendFormToRegister"
                        />
                    </div>
                </div>
            </v-form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            formValid: true,
            
            form: {
                lastname:        null,
                name:            null,
                birthday:        null,
                gender:          null,
                email:           null,
                phone:           null,
                password:        null,
                passwordConfirm: null,
                agreeTerms:      false,
                avatar:          null,
            },
            
            formLimits: {
                lastname: 250,
                name:     250,
                email:    250,
            },
            
            genders: [
                {
                    value: 1,
                    label: 'Женский',
                },
                {
                    value: 2,
                    label: 'Мужской',
                },
            ],
            
            passportFieldType: true, // true - hide, false - show
        };
    },
    computed: {
        formRules() {
            return {
                email: [
                    v => !!v || 'Обязательное поле',
                    v => /.+@.+\..+/.test(v) || 'Введите корректный Email',
                ],
                
                password: [
                    v => !!v || 'Обязательное поле',
                    v => (v && v.length >= 8) || 'Минимальная длина пароля - 8 символов',
                    v => (v && v.length <= 50) || 'Максимальная длина пароля - 50 символов',
                ],
                
                passwordConfirm: [
                    v => !!v || 'Обязательное поле',
                    v => v === this.form.password || 'Пароли не совпадают',
                ],
                
                birthday: [
                    v => !!v || 'Обязательное поле',
                    v => v === '__.__.____'
                        || v === '____-__-__'
                        || v === null
                        || v === ''
                        || !isNaN(Date.parse(v.split('.').reverse().join('/')))
                        || 'Укажите корректную дату',
                    v => v === '__.__.____'
                        || v === '____-__-__'
                        || v === null
                        || v === ''
                        || new Date(v.split('.').reverse().join('/')).getTime() <= Date.now()
                        || 'Дата не может быть будущим',
                ],
                
                default: [
                    v => !!v || 'Обязательное поле',
                ],
            };
        },
    },
    methods:  {
        openAgreeTermsPage(event) {
            event.stopPropagation();
            event.preventDefault();
            window.open('/agree-terms', '_blank');
        },
        
        async sendFormToRegister() {
            try {
                const validate = this.$refs.registerForm.validate();
                
                if (validate) {
                
                }
                else {
                    this.$toast.error('Вы не заполнили все необходимые поля');
                }
            }
            catch (err) {
                console.error('ERROR SEND FORM TO REGISTER');
                console.error(err);
            }
        },
    },
};
</script>

<style lang="scss">
.btn-auth {
    border-radius:    15px;
    border:           2px solid #374785;
    padding:          0.5rem 1.4rem !important;
    background-color: #fff;
    width:            100%;
    font-size:        18px;
    line-height:      32px;
    color:            #24315E;
    display:          flex;
    justify-content:  center;
    cursor:           pointer;
    
    &.google::before,
    &.vk::before {
        content:             '';
        width:               30px;
        height:              30px;
        margin-right:        1.5rem;
        background-position: center;
    }
    
    &.google::before {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.03125 15C7.03125 13.5137 7.44076 12.1213 8.15221 10.9291V5.872H3.0951C1.08797 8.47872 0 11.6556 0 15C0 18.3444 1.08797 21.5213 3.0951 24.1281H8.15221V19.0709C7.44076 17.8787 7.03125 16.4864 7.03125 15Z' fill='%23FBBD00'/%3E%3Cpath d='M15 22.9687L11.4844 26.4844L15 30C18.3445 30 21.5213 28.912 24.128 26.9049V21.8532H19.0763C17.8737 22.5672 16.4754 22.9687 15 22.9687Z' fill='%230F9D58'/%3E%3Cpath d='M8.15184 19.0709L3.09473 24.128C3.49211 24.6441 3.92482 25.1384 4.39305 25.6066C7.22617 28.4397 10.993 30 14.9996 30V22.9687C12.092 22.9687 9.54355 21.4031 8.15184 19.0709Z' fill='%2331AA52'/%3E%3Cpath d='M30 15C30 14.0874 29.9174 13.1731 29.7544 12.2826L29.6225 11.562H15V18.5932H22.1163C21.4253 19.9679 20.3627 21.0894 19.0762 21.8533L24.128 26.905C24.6441 26.5076 25.1383 26.0749 25.6066 25.6067C28.4397 22.7735 30 19.0067 30 15Z' fill='%233C79E6'/%3E%3Cpath d='M20.6348 9.36521L21.2562 9.98666L26.2281 5.01486L25.6066 4.39342C22.7735 1.56029 19.0067 0 15 0L11.4844 3.51562L15 7.03125C17.1285 7.03125 19.1296 7.86012 20.6348 9.36521Z' fill='%23CF2D48'/%3E%3Cpath d='M15.0002 7.03125V0C10.9935 0 7.22672 1.56029 4.39354 4.39336C3.92531 4.86158 3.4926 5.35582 3.09521 5.87197L8.15232 10.9291C9.5441 8.59687 12.0925 7.03125 15.0002 7.03125Z' fill='%23EB4132'/%3E%3C/svg%3E%0A");
    }
    
    &.vk::before {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='17' viewBox='0 0 30 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.8193 10.795C26.8144 11.7666 27.8647 12.6806 28.7573 13.7502C29.1516 14.2255 29.5248 14.7159 29.8104 15.2676C30.215 16.0517 29.8485 16.9145 29.1455 16.9613L24.775 16.9593C23.6477 17.0528 22.7485 16.5991 21.9924 15.8284C21.3873 15.212 20.8269 14.556 20.2451 13.9189C20.0065 13.6585 19.7569 13.4135 19.4586 13.2198C18.862 12.8325 18.3441 12.951 18.0032 13.5733C17.6559 14.2062 17.5771 14.907 17.543 15.6124C17.4962 16.6415 17.1851 16.9121 16.1514 16.9592C13.9421 17.0634 11.8454 16.7292 9.89753 15.6147C8.18026 14.6322 6.84866 13.2451 5.68956 11.6748C3.43294 8.61722 1.70472 5.25733 0.151512 1.80334C-0.198116 1.02516 0.0575866 0.607442 0.916219 0.592618C2.34198 0.564903 3.76757 0.566895 5.19503 0.590626C5.77452 0.599122 6.15813 0.931466 6.3819 1.47891C7.15329 3.37565 8.09718 5.18022 9.28194 6.8529C9.59747 7.29821 9.91921 7.74358 10.3773 8.057C10.8841 8.40405 11.27 8.28903 11.5084 7.72442C11.6597 7.36641 11.726 6.98081 11.7601 6.59743C11.8731 5.27831 11.888 3.96141 11.6899 2.64692C11.5682 1.82654 11.1061 1.29545 10.2875 1.14024C9.86981 1.06108 9.93198 0.905626 10.1342 0.667208C10.4855 0.255996 10.8159 0 11.4746 0H16.4139C17.1915 0.153457 17.3642 0.502794 17.4707 1.2852L17.4749 6.77174C17.4664 7.07462 17.6262 7.9735 18.1717 8.17395C18.6084 8.31669 18.8962 7.96735 19.1582 7.6905C20.3408 6.43536 21.1849 4.952 21.9389 3.41602C22.2735 2.74061 22.5613 2.03924 22.8401 1.3384C23.0467 0.818379 23.3709 0.5625 23.9567 0.573809L28.7105 0.578028C28.8515 0.578028 28.9941 0.580079 29.1306 0.603458C29.9317 0.739981 30.1512 1.08457 29.9038 1.8668C29.514 3.09405 28.7555 4.1168 28.0138 5.14424C27.2211 6.24118 26.3732 7.30061 25.587 8.40405C24.8647 9.41186 24.922 9.91975 25.8193 10.795Z' fill='%23436EAB'/%3E%3C/svg%3E%0A");
    }
}

.agree-terms-checkbox {
    label {
        font-size:   24px;
        line-height: 32px;
        color:       #24315E !important;
        
        a {
            color:         #F76D6D !important;
            border-bottom: 2px solid #F76D6D;
        }
    }
}
</style>