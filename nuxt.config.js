export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'school-for-future-adults',
        meta:  [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link:  [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/main.scss',
    ],
    
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    
    plugins: [
        '~/plugins/vmask.client.js',
    ],
    
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        // '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        [ '@nuxtjs/vuetify', {
            defaultAssets: {
                icons: 'md',
            },
        } ],
        '@nuxtjs/tailwindcss',
    ],
    
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/toast',
    ],
    
    toast: {
        position:     'top-right',
        duration:     7000,
        keepOnHover:  true,
        closeOnSwipe: true,
        action:       {
            icon:    'close',
            onClick: (e, toastObject) => {
                toastObject.goAway(0);
            },
        },
    },
    
    // Axios module configuration: https://go.nuxtjs.dev/config-axios http://dev.future-adults.school/
    axios: {
        baseURL:        'http://api.future-adults.school/',
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFTOKEN',
    },
    auth:  {
        strategies: {
            local:    {
                endpoints: {
                    login:  {
                        url:          'api/auth/token/login/',
                        method:       'post',
                        propertyName: 'auth_token',
                    },
                    logout: { url: 'api/auth/token/logout/', method: 'post' },
                    user:   {
                        url:          'account/profile/',
                        method:       'get',
                        propertyName: false,
                    },
                },
                tokenType: 'Token',
                tokenName: 'Authorization',
            },
            redirect: {
                login: '/login',
                home:  '/',
            },
        },
    },
    
    loading: {
        // color:       'rgb(143, 255, 199)',
        color:       '#ffa000',
        failedColor: 'red',
        height:      '4px',
        continuous:  true,
        duration:    10000,
    },
    
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },
    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    
    server: {
        host: '0.0.0.0',
    },
};
