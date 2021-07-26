<template>
    <section
        id="login-form"
        class="section tw-flex tw-flex-row tw-mt-10"
    >
        <div class="tw-w-full tw-mb-7">
            <v-form
                ref="registerForm"
                v-model="formValid"
                lazy-validation
                @keyup.enter.prevent.stop="keyEnterPress"
            >
                <div class="title">
                    <h2>Вход</h2>
                </div>
                
                <div class="tw-flex tw-flex-row tw-justify-center tw-mb-7">
                    <div
                        class="2xl:tw-w-2/5 xl:tw-w-2/5 lg:tw-w-2/5 md:tw-w-1/2 sm:tw-w-full tw-flex tw-flex-col"
                    >
                        <InputDefault
                            v-model="email"
                            :rules="formRules.email"
                            dark-border
                            label="Email"
                            placeholder="Укажите email"
                            type="email"
                        />
                        <InputDefault
                            v-model="password"
                            :rules="formRules.default"
                            dark-border
                            label="Пароль"
                            placeholder="Укажите пароль"
                            type="password"
                        />
                    </div>
                </div>
                
                <div class="tw-flex tw-flex-row tw-justify-center tw-mb-7">
                    <div class="btn btn--circle">
                        <button
                            type="button"
                            @click="login"
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </v-form>
            
            <div class="tw-flex tw-flex-col tw-items-center no-account">
                <div class="w-auto">У вас нет аккаунта?</div>
                
                <div class="w-auto">
                    <div class="btn btn--underline">
                        <button type="button">Создать аккаунт</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginForm',
    pros: {
        asModal: {
            type:    Boolean,
            default: false,
        },
    },
    data() {
        return {
            formValid: true,
            email:     null,
            password:  null,
        };
    },
    computed: {
        formRules() {
            return {
                email: [
                    (v) => !!v || 'Обязательное поле',
                    (v) => /.+@.+\..+/.test(v) || 'Введите корректный Email',
                ],
                
                default: [ (v) => !!v || 'Обязательное поле' ],
            };
        },
    },
    methods:  {
        async login() {
            try {
                await this.$auth.loginWith('local', {
                    data: { email: this.email, password: this.password },
                });
            }
            catch (error) {
                this.$auth.logout();
                this.$toast.error('Ошибка входа');
            }
        },
        
        async keyEnterPress() {
            if (this.email && this.password) {
                await this.login();
            }
        },
    },
};
</script>

<style lang="scss">
.no-account {
    color:     #24315e;
    font-size: 18px !important;
    
    .btn--underline button {
        font-size: 18px !important;
    }
}
</style>