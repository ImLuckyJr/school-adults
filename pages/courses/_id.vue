<template>
    <div>
        <section
            id="course"
            class="section tw-mt-16 courses"
        >
            <div
                :class="(!form) ? 'tw-animate-pulse tw-bg-pr-blue tw-h-16' : ''"
                class="title"
            >
                <h2>{{ (form) ? form.title : '' }}</h2>
            </div>
            
            <div
                v-if="form"
                class="courses__body"
            >
                <div class="course__wrapper">
                    <div
                        class="course__avatar"
                        v-bind:style="{
                                'background-image':
                                  'url(' + $axios.defaults.baseURL + form.avatar + ')',
                            }"
                    />
                    <div class="course__info">
                        <div class="course__info__title">Аннотация курса</div>
                        <div class="course__info__description">
                            {{ form.description }}
                        </div>
                        <div class="course__info__status">
                            <div class="users">
                                {{ form.users ? form.users : 505 }}
                            </div>
                            <div class="rating">{{ form.rating }}</div>
                            <div class="time">{{ form.difficulty }}</div>
                        </div>
                        <div class="course__info__likes">
                            {{ form.likes ? form.likes : 123 }}
                        </div>
                        
                        <div class="course__info__action">
                            <ButtonDefault
                                align="right"
                                class="btn--default"
                                label="Перейти"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-else
                class="courses__body tw-flex tw-items-center tw-animate-pulse"
            >
                <div class="course__wrapper">
                    <div class="course__avatar"/>
                    <div class="course__info">
                        <div class="course__info__title"></div>
                        <div class="course__info__description">
                        </div>
                        <div class="course__info__status">
                            <div class="users">
                            </div>
                            <div class="rating"></div>
                            <div class="time"></div>
                        </div>
                        <div class="course__info__likes">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'courseId',
    data() {
        return {
            form: null,
        };
    },
    // call fetch only on client-side
    // TODO: УБРАТЬ!!!
    fetchOnServer: false,
    async fetch() {
        try {
            const response = await this.$axios.$get(this.$axios.defaults.baseURL + 'courses/get/' + this.$route.params.id);
            console.log('response');
            console.log(response);
            this.form = response;
        }
        catch (err) {
            console.log('ERROR GET ALL COURSES');
            console.error(err);
            this.$toast.error('Произошла ошибка при получении курсов. Попробуйте позже или обратитесь в техподдержку.');
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    },
};
</script>

<style scoped>

</style>