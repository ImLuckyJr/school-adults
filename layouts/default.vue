<template>
    <v-app>
        <div class="tw-container main-container tw-mx-auto">
            <TheHeader/>
            <Nuxt/>
        </div>
        <TheFooter/>
    </v-app>
</template>

<style lang="scss">
.main-container {
    min-height:     100vh;
    padding-bottom: 302px;
}
</style>
