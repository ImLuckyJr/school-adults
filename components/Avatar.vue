<template>
    <div class="avatar">
        <div class="avatar__wrapper">
            <div
                class="avatar__circle"
            ></div>
            
            <div class="avatar__choose">
                <div class="btn btn--underline">
                    <button type="button">Выбрать аватар</button>
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
    name:  'Avatar',
    props: {
        value: {
            required: true,
        },
        
        showSubmitForm: {
            type:    Boolean,
            default: false,
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
        border-radius:    50%;
        border:           3px solid #A8D1E7;
        width:            250px;
        height:           250px;
        margin-bottom:    1rem;
        background-image: url('~/assets/images/default_user.svg');
    }
    
    &__send {
        position: absolute;
        bottom:   -85px;
        right:    -85px;
    }
}
</style>