<template>
    <div>
        <div class="container main-container mx-auto">
            <TheHeader/>
            <Nuxt/>
        </div>
        <TheFooter/>
    </div>
</template>

<style lang="scss">
.main-container {
    min-height:        100vh;
    margin-bottom: -404px;
    padding-bottom: 404px;
}
</style>
