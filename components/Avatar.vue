<template>
    <div class="avatar">
        <div class="avatar__wrapper">
            <div class="avatar__circle">
                <v-img
                    ref="avatar"
                    :lazy-src="require('~/assets/images/default_user.svg')"
                    :src="require('~/assets/images/default_user.svg')"
                />
            </div>
            
            <div class="avatar__choose">
                <div class="btn btn--underline">
                    <button
                        type="button"
                        @click="$refs.chooseAvatar.$refs.input.click()"
                    >Выбрать аватар
                    </button>
                    
                    <v-file-input
                        ref="chooseAvatar"
                        :value="value"
                        accept="image/png, image/jpeg, image/bmp, image/gif"
                        style="display: none;"
                        @change="changeFileInput"
                    />
                </div>
            </div>
            
            <div
                v-if="showSubmitForm"
                class="avatar__send"
            >
                <div class="btn btn--circle">
                    <button
                        type="button"
                        @click="$emit('submit-form')"
                    >Отправить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:    'Avatar',
    props:   {
        value: {
            required: true,
        },
        
        showSubmitForm: {
            type:    Boolean,
            default: false,
        },
    },
    methods: {
        changeFileInput(File) {
            if (File.size <= 10485760) {
                const avatar = document.querySelector('.avatar__circle .v-image__image.v-image__image--cover');
                this.$emit('input', File);
                const reader = new FileReader();
                reader.readAsDataURL(File);
                
                reader.onloadend = () => {
                    avatar.style.backgroundImage = `url(${ reader.result })`;
                };
            }
            else {
                this.$toast.error('Максимальный размер файла 10 Мб');
            }
        },
    },
};
</script>

<style lang="scss">
.avatar {
    &__wrapper {
        border:         3px solid #374785;
        border-radius:  25px;
        padding:        45px 45px 85px;
        display:        flex;
        flex-direction: column;
        align-items:    center;
        position:       relative;
    }
    
    &__circle {
        border-radius: 50%;
        border:        3px solid #A8D1E7;
        width:         250px;
        height:        250px;
        margin-bottom: 1rem;
        overflow:      hidden;
    }
    
    &__send {
        position: absolute;
        bottom:   -85px;
        right:    -85px;
    }
}
</style>