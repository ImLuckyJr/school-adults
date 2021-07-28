<template>
    <div>
        <section
            id="courses"
            class="section tw-mt-16 courses"
        >
            <div class="tw-flex tw-flex-row tw-justify-between">
                <div class="2xl:tw-w-auto xl:tw-w-auto lg:tw-w-auto md:tw-w-full sm:tw-w-full">
                    <div class="title title--left">
                        <h2>Курсы</h2>
                    </div>
                </div>
                
                <div class="2xl:tw-w-auto xl:tw-w-auto lg:tw-w-auto md:tw-w-full sm:tw-w-full">
                    Тут поиск
                </div>
            </div>
            
            <div class="tw-flex tw-flex-row   courses__body">
                <div class="courses__partitions tw-flex-shrink-0  tw-w-64 ">
                    <!-- 2xl:tw-w-1/6 xl:tw-w-1/6 lg:tw-w-16 md:tw-w-full sm:tw-w-full -->
                    <div
                        v-for="(part, partIndex) in courses_partitions"
                        :key="partIndex"
                        class="courses__partition"
                    >
                        {{ part.title }}
                    </div>
                </div>
                
                <div
                    v-if="courses.length > 0"
                    class="courses__body tw-flex-1 tw-grid tw-grid-cols-1 tw-gap-6"
                >
                    <div
                        v-for="(course, courseIndex) in courses"
                        :key="courseIndex"
                        class="course__wrapper"
                    >
                        <div
                            class="course__avatar"
                            v-bind:style="{
                                'background-image':
                                  'url(' + $axios.defaults.baseURL + course.avatar + ')',
                            }"
                        >
                            <NuxtLink
                                :to="`/courses/${course.path}`"
                                class="course__avatar__more"
                            >
                                Подробнее
                            </NuxtLink>
                        </div>
                        <div class="course__info">
                            <div class="course__info__bg"/>
                            <div class="course__info__title">{{ course.title }}</div>
                            <div class="course__info__description">
                                {{ course.description }}
                            </div>
                            <div class="course__info__status">
                                <div class="users">
                                    {{ course.users ? course.users : 505 }}
                                </div>
                                <div class="rating">{{ course.rating }}</div>
                                <div class="time">{{ course.difficulty }}</div>
                            </div>
                            <div class="course__info__likes">
                                <span>{{ course.likes ? course.likes : 555 }}</span>
                            </div>
                        </div>
    
                        <div class="course__action sign-up">
                            <ButtonDefault
                                align="right"
                                class="btn--default"
                                label="Записаться"
                            />
                        </div>
                    </div>
                </div>
                <div
                    v-else
                    class="tw-animate-pulse courses__body tw-flex-1 tw-grid tw-grid-cols-1 tw-gap-6"
                >
                    <div class="course__wrapper">
                        <div class="course__avatar"/>
                        <div class="course__info">
                            <div class="course__info__bg"/>
                            <div class="course__info__title"/>
                            <div class="course__info__description"/>
                            <div class="course__info__status"/>
                            <div class="course__info__likes"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Courses-index',
    data() {
        return {
            courses:            [],
            courses_partitions: [
                {
                    title:        'Все курсы',
                    restrictions: 'Без ограничений',
                },
            ],
        };
    },
    async fetch() {
        try {
            this.courses = await this.$axios.$get(`${this.$axios.defaults.baseURL}courses/get/`);

        }
        catch (err) {
            console.log('ERROR GET ALL COURSES');
            console.error(err);
            this.$toast.error('Произошла ошибка при получении курсов. Попробуйте позже или обратитесь в техподдержку.');
        }

        try {
            let categories = await this.$axios.$get(`${this.$axios.defaults.baseURL}courses/categories/`);
            this.courses_partitions = this.courses_partitions.concat(categories);
        }
        catch (error) {
            this.$toast.error('Произошла ошибка при списка категорий. Попробуйте позже или обратитесь в техподдержку.');
        }
    },
    // call fetch only on client-side
    fetchOnServer: false,
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    },
    computed: {
        allCoursesPartitions() {
            return [
                {
                    label:         'Все разделы',
                    disableButton: false,
                    active:        true,
                },
                {
                    label:         'Раздел 1',
                    disableButton: true,
                    active:        false,
                },
                {
                    label:         'Раздел 2',
                    disableButton: true,
                    active:        false,
                },
                {
                    label:         'Раздел 3',
                    disableButton: true,
                    active:        false,
                },
            ];
        },
    },
};
</script>

<style lang="scss">
</style>