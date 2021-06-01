<template>
    <footer class="footer">
        <div class="tw-container tw-mx-auto tw-flex tw-flex-row tw-py-5">
            <div class="2xl:tw-w-1/2 2xl:tw-order-1 xl:tw-w-1/2 xl:tw-order-1 lg:tw-w-1/2 lg:tw-order-1 md:tw-w-full md:tw-order-2 sm:tw-w-full sm:tw-order-2">
                <div class="tw-flex tw-flex-col tw-justify-between tw-h-full">
                    <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                        <div class="phone tw-mb-1">+7 (888) 888-88-88</div>
                        <div class="street tw-mb-2">Санкт-Петербург, Кронверский проспект, 49</div>
                        <div class="icons">
                            <a
                                class="icon"
                                href="https://instagram.com/"
                                target="_blank"
                            >
                                <object
                                    :data="require('../assets/images/instagram.svg')"
                                    type="image/svg+xml"
                                >
                                    <img
                                        alt="Instagram"
                                        src="~/assets/images/instagram.svg"
                                    />
                                </object>
                            </a>
                            <a
                                class="icon"
                                href="https://tiktok.com/"
                                target="_blank"
                            >
                                <object
                                    :data="require('../assets/images/tiktok.svg')"
                                    type="image/svg+xml"
                                >
                                    <img
                                        alt="TikTok"
                                        src="~/assets/images/tiktok.svg"
                                    />
                                </object>
                            </a>
                            <a
                                class="icon"
                                href="https://vk.com/"
                                target="_blank"
                            >
                                <object
                                    :data="require('../assets/images/vk.svg')"
                                    type="image/svg+xml"
                                >
                                    <img
                                        alt="VK"
                                        src="~/assets/images/vk.svg"
                                    />
                                </object>
                            </a>
                            <a
                                class="icon"
                                href="https://youtube.com/"
                                target="_blank"
                            >
                                <object
                                    :data="require('../assets/images/youtube.svg')"
                                    type="image/svg+xml"
                                >
                                    <img
                                        alt="YouTube"
                                        src="~/assets/images/youtube.svg"
                                    />
                                </object>
                            </a>
                            <a
                                class="icon"
                                href="https://telegram.org/"
                                target="_blank"
                            >
                                <object
                                    :data="require('../assets/images/telegram.svg')"
                                    type="image/svg+xml"
                                >
                                    <img
                                        alt="TG"
                                        src="~/assets/images/telegram.svg"
                                    />
                                </object>
                            </a>
                        </div>
                    </div>
                    <div class="tw-w-full tw-mt-24">
                        © {{ new Date().getFullYear() }} Школа будущих взрослых
                    </div>
                </div>
            </div>
            <div class="2xl:tw-w-1/2 2xl:tw-order-2 xl:tw-w-1/2 xl:tw-order-2 lg:tw-w-1/2 lg:tw-order-2 md:tw-w-full md:tw-order-1 sm:tw-w-full sm:tw-order-1">
                <div class="tw-flex tw-flex-row tw-gap-20">
                    <div class="2xl:tw-w-auto xl:tw-w-auto lg:tw-w-auto md:tw-w-full sm:tw-w-full">
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
                    
                    <div class="2xl:tw-w-auto xl:tw-w-auto lg:tw-w-auto md:tw-w-full sm:tw-w-full">
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
    
    .icons {
        display:        flex;
        flex-direction: row;
        
        a.icon {
            margin-right: 1.3rem;
            cursor:       pointer;
            
            object {
                pointer-events: none;
            }
        }
    }
}
</style>