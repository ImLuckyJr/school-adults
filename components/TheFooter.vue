<template>
    <footer class="footer">
        <div class="container mx-auto flex flex-row py-5">
            <div class="2xl:w-1/2 2xl:order-1 xl:w-1/2 xl:order-1 lg:w-1/2 lg:order-1 md:w-full md:order-2 sm:w-full sm:order-2">
                <div class="flex flex-col justify-between h-full">
                    <div class="w-full flex flex-col gap-1">
                        <div class="phone">+7 (888) 888-88-88</div>
                        <div class="street">Санкт-Петербург, Кронверский проспект, 49</div>
                        <div class="icons">insta tiktok vk youtube tg</div>
                    </div>
                    <div class="w-full">
                        © {{ new Date().getFullYear() }} Школа будущих взрослых
                    </div>
                </div>
            </div>
            <div class="2xl:w-1/2 2xl:order-2 xl:w-1/2 xl:order-2 lg:w-1/2 lg:order-2 md:w-full md:order-1 sm:w-full sm:order-1">
                <div class="flex flex-row gap-20">
                    <div class="2xl:w-auto xl:w-auto lg:w-auto md:w-full sm:w-full">
                        <div class="footer--menu-item">
                            <a
                                class=""
                                href="#"
                            >О нас</a>
                        </div>
                        <div class="footer--menu-item">
                            <a
                                class=""
                                href="#"
                            >Контакты</a>
                        </div>
                        <div class="footer--menu-item">
                            <a
                                class=""
                                href="#"
                            >Вакансии</a>
                        </div>
                        <div class="footer--menu-item">
                            <a
                                class=""
                                href="#"
                            >Партнёры</a>
                        </div>
                    </div>
                    
                    <div class="2xl:w-auto xl:w-auto lg:w-auto md:w-full sm:w-full">
                        <div class="footer--menu-item">
                            <a
                                class=""
                                href="#"
                            >Политика конфиденциальности</a>
                        </div>
                        <div class="footer--menu-item">
                            <a
                                class=""
                                href="#"
                            >Партнерская программа</a>
                        </div>
                        <div class="footer--menu-item">
                            <a
                                class=""
                                href="#"
                            >Лицензия</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
};
</script>

<style lang="scss">
.footer {
    margin-top:       -262px;
    padding:          35px 0;
    background-color: #A8D1E7;
    color:            #24315E;
    font-size:        18px;
    line-height:      32px;
    
    &--menu-item {
        margin-bottom: 10px;
        cursor:        pointer;
    }
}
</style>