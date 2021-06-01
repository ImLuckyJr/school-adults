<template>
    <header class="tw-flex tw-flex-row tw-justify-between tw-py-5">
        <div class="header__left tw-flex tw-flex-row">
            <div class="logo 2xl:tw-mr-32 xl:tw-mr-32 lg:tw-mr-24 md:tw-mr-24 sm:tw-mr-16">
                <a href="/">
                    <object
                        :data="require('~/assets/images/logo.svg')"
                        style="pointer-events: none"
                        type="image/svg+xml"
                    >
                        <img
                            alt="Логотип"
                            src="~/assets/images/logo.svg"
                        />
                    </object>
                </a>
            </div>
            <div class="links tw-flex tw-flex-row tw-items-stretch tw-gap-9">
                <div
                    :class="{ 'link__item--active': $route.name === 'index' }"
                    class="link__item tw-flex tw-items-center"
                >
                    <NuxtLink
                        v-if="$route.name !== 'index'"
                        to="/"
                    >Главная
                    </NuxtLink>
                    <span v-else>Главная</span>
                </div>
                <div
                    :class="{ 'link__item--active': $route.name === 'courses' }"
                    class="link__item tw-flex tw-items-center"
                >
                    <NuxtLink
                        v-if="$route.name !== 'courses'"
                        to="/courses"
                    >Курсы
                    </NuxtLink>
                    <span v-else>Курсы</span>
                </div>
                <div
                    :class="{ 'link__item--active': $route.name === 'contacts' }"
                    class="link__item tw-flex tw-items-center"
                >
                    <a
                        class=""
                        href="#"
                    >Контакты</a>
                </div>
                <div
                    :class="{ 'link__item--active': $route.name === 'help' }"
                    class="link__item tw-flex tw-items-center"
                >
                    <a
                        class=""
                        href="#"
                    >Помощь</a>
                </div>
            </div>
        </div>
        
        <div class="header__right tw-flex tw-flex-row">
            <div class="links tw-flex tw-flex-row tw-items-stretch">
                <div
                    :class="{ 'link__item--active': /login|register/.test($route.name) }"
                    class="link__item link__item--profile tw-flex tw-items-center tw-justify-end"
                >
                    <v-menu
                        right
                        :nudge-left="50"
                        content-class="header-menu"
                        offset-y
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                                style="text-transform: capitalize"
                                text
                            >
                                Вход
                            </v-btn>
                        </template>
                        
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in authMenu"
                                :key="index"
                                :to="item.to"
                            >
                                <v-list-item-title style="text-align: right">{{ item.label }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    data() {
        return {};
    },
    // created() {
    //     console.log('this.$route');
    //     console.log(this.$route);
    // },
    computed: {
        authMenu() {
            return [
                {
                    to:    'login',
                    label: 'Вход',
                },
                {
                    to:    'register',
                    label: 'Регистрация',
                },
            ];
        },
    },
};
</script>

<style lang="scss">
header {
    font-size: 1.5rem;
    
    .link {
        $self: &;
        
        &__item {
            text-decoration: none !important;
            
            a {
                text-decoration: none !important;
            }
            
            > span {
                cursor: pointer;
            }
            
            &--active {
                > span,
                > a {
                    color: #F76D6D;
                }
                
                #{$self}--profile {
                    .dropdown {
                        color: #F76D6D !important;
                        
                        &::before {
                            background-image: url("~/assets/images/user-icon-hover.svg");
                        }
                    }
                }
            }
            
            &:hover,
            li:hover {
                > span,
                > a {
                    color: #F76D6D !important;
                }
            }
            
            &--profile {
                .v-btn {
                    color:          inherit !important;
                    font-size:      1.5rem !important;
                    text-indent:    0 !important;
                    letter-spacing: normal !important;
                    transition:     none !important;
                    
                    &.btn {
                        transition: none !important;
                    }
                    
                    &::after {
                        display: none !important;
                    }
                    
                    &:hover {
                        background-color: transparent !important;
                        color:            #F76D6D !important;
                        
                        &::before {
                            background-image: url("~/assets/images/user-icon-hover.svg");
                        }
                    }
                    
                    &::before {
                        position:         relative;
                        display:          inline-block;
                        content:          ' ';
                        background-image: url("~/assets/images/user-icon.svg");
                        background-size:  30px 36px;
                        width:            30px;
                        height:           36px;
                        margin-right:     0.5rem;
                        opacity:          1 !important;
                        background-color: transparent !important;
                    }
                    
                    &__content {
                        font-weight: normal !important;
                    }
                }
                
                li {
                    text-align: right;
                    
                    &:hover a {
                        background-color: transparent;
                    }
                }
            }
        }
    }
}

.header-menu {
    box-shadow:    none !important;
    border:        3px solid #A8D1E7 !important;
    border-radius: 10px !important;
    margin-top:    0.2rem;
    
    .v-list {
        margin-top:     0 !important;
        padding-top:    0 !important;
        margin-bottom:  0 !important;
        padding-bottom: 0 !important;
        
        &:hover {
            background-color: transparent;
        }
        
        &-item {
            &--active,
            &:hover {
                color: #F76D6D !important;
                
                &:before {
                    opacity: 0;
                }
            }
            
            &__title {
                font-size:   24px;
                line-height: 32px;
                
                &:hover {
                    background-color: transparent;
                    color:            #F76D6D !important;
                }
            }
        }
    }
}
</style>