<template>
    <section
        id="register"
        class="section tw-flex tw-flex-row tw-mt-10"
    >
        <div class="tw-w-full tw-mb-32">
            <div class="title">
                <h2>Регистрация</h2>
            </div>
            
            <div class="tw-flex tw-flex-row tw-gap-x-32">
                <div class="2xl:tw-w-1/2 xl:tw-w-1/2 lg:tw-w-1/2 md:tw-w-full sm:tw-w-full tw-flex tw-flex-col">
                    <InputDefault
                        v-model="lastname"
                        dark-border
                        label="Фамилия"
                        placeholder="Введите фамилию"
                    />
                    <InputDefault
                        v-model="name"
                        dark-border
                        label="Имя"
                        placeholder="Введите имя"
                    />
                    <InputDefault
                        v-model="birthday"
                        dark-border
                        label="Дата рождения"
                        placeholder="__.__.____"
                    />
                    <InputDefault
                        v-model="gender"
                        dark-border
                        label="Пол"
                        placeholder="Ваш пол"
                    />
                </div>
                
                <div class="2xl:tw-w-1/2 xl:tw-w-1/2 lg:tw-w-1/2 md:tw-w-full sm:tw-w-full tw-flex tw-flex-col">
                    <InputDefault
                        v-model="email"
                        dark-border
                        label="Email"
                        type="email"
                        placeholder="Укажите email"
                    />
                    <InputDefault
                        v-model="phone"
                        dark-border
                        label="Телефон"
                        placeholder="+7 (___) ___-__-__"
                    />
                    <InputDefault
                        v-model="password"
                        dark-border
                        label="Пароль"
                        placeholder="Укажите пароль"
                        type="password"
                    />
                    <InputDefault
                        v-model="repeatPassword"
                        dark-border
                        label="Повторите пароль"
                        placeholder="Укажите пароль"
                        type="password"
                    />
                </div>
            </div>
            
            <div class="tw-flex tw-flex-row tw-gap-x-32">
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
            
            <div class="tw-flex tw-flex-row">
                <div class="tw-w-full">
                    <v-checkbox
                        v-model="agreeTerms"
                        label="Я соглашаюсь с политикой конфиденциальности"
                    ></v-checkbox>
                </div>
            </div>
            
            <div class="tw-flex tw-flex-row tw-justify-center">
                <div class="2xl:tw-w-1/3 xl:tw-w-1/3 lg:tw-w-1/3 md:tw-w-1/2 sm:tw-w-full">
                    <Avatar v-model="avatar"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            lastname:       null,
            name:           null,
            birthday:       null,
            gender:         null,
            email:          null,
            phone:          null,
            password:       null,
            repeatPassword: null,
            agreeTerms:     false,
            avatar:         null,
        };
    },
};
</script>

<style scoped>

</style>