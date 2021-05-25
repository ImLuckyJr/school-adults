<template>
    <section
        id="register"
        class="section flex flex-row mt-10"
    >
        <div class="w-full">
            <div class="title">
                <h2>Регистрация</h2>
            </div>
            
            <div class="flex flex-row gap-x-32">
                <div class="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full flex flex-col">
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
                
                <div class="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full flex flex-col">
                    <InputDefault
                        v-model="email"
                        dark-border
                        label="Email"
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
            
            <div class="flex flex-row gap-x-32">
                <div class="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full flex">
                    <div class="btn-auth google">
                        Продолжить с помощью Google
                    </div>
                </div>
                
                <div class="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full flex">
                    <div class="btn-auth vk">
                        Продолжить с помощью ВКонтакте
                    </div>
                </div>
            </div>
            
            <div class="flex flex-row">
                <div class="w-full">
                    <v-checkbox
                        v-model="agreeTerms"
                        label="Я соглашаюсь с политикой конфиденциальности"
                    ></v-checkbox>
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