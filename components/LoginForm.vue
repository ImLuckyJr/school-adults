<template>
    <section
        id="login-form"
        class="section tw-flex tw-flex-row tw-mt-10"
    >
        <div class="tw-w-full tw-mb-7">
            <div class="title">
                <h2>Вход</h2>
            </div>
            
            <div class="tw-flex tw-flex-row tw-justify-center tw-mb-7">
                <div class="2xl:tw-w-2/5 xl:tw-w-2/5 lg:tw-w-2/5 md:tw-w-1/2 sm:tw-w-full tw-flex tw-flex-col">
                    <InputDefault
                        v-model="email"
                        dark-border
                        label="Email"
                        placeholder="Укажите email"
                        type="email"
                    />
                    <InputDefault
                        v-model="password"
                        dark-border
                        label="Пароль"
                        placeholder="Укажите пароль"
                        type="password"
                    />
                </div>
            </div>
            
            <div class="tw-flex tw-flex-row tw-justify-center tw-mb-7">
                <div class="btn btn--circle">
                    <button type="button">Войти</button>
                </div>
            </div>
            
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
            email:    null,
            password: null,
        };
    },
};
</script>

<style lang="scss">
.no-account {
    color:     #24315E;
    font-size: 18px !important;
    
    .btn--underline button {
        font-size: 18px !important;
    }
}
</style>