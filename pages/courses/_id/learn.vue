<template>
    <div>
        <section
            id="courses-learn"
            class="section tw-mt-16 courses"
        >
            <div
                :class="(!form) ? 'tw-animate-pulse tw-bg-pr-blue tw-h-16' : ''"
                :style="(!form) ? 'border-radius: 16px;' : ''"
                class="title  title--left"
            >
                <!--тут название такое: "Название курса, обучение"-->
                <h2>{{ (form) ? form.title : '' }}</h2>
            </div>
            
            <div class="tw-flex tw-flex-row tw-justify-between tw-gap-24 courses__body">
                <div class="courses__steps 2xl:tw-w-1/6 xl:tw-w-1/6 lg:tw-w-16 md:tw-w-full sm:tw-w-full">
                    <v-expansion-panels accordion>
                        <v-expansion-panel
                            v-for="(item,i) in 5"
                            :key="i"
                            class="courses__step"
                        >
                            <v-expansion-panel-header>Item</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div v-for="(item,i) in 5" :key="i">
                                    часть {{ i + 1 }}
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <div
                        v-for="(step, stepIndex) in coursesSteps"
                        :key="stepIndex"
                        class="courses__step"
                    >
                        {{ step.title }}
                    </div>
                </div>
                
                <div class="courses__description 2xl:tw-w-auto xl:tw-w-auto lg:tw-w-auto md:tw-w-full sm:tw-w-full">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CourseLearn',
    data() {
        return {
            form:         null,
            coursesSteps: [],
        };
    },
    // call fetch only on client-side
    // TODO: УБРАТЬ!!!
    fetchOnServer: false,
    async fetch() {
        // try {
        //     const response = await this.$axios.$get(this.$axios.defaults.baseURL + 'courses/get/' + this.$route.params.id);
        //     console.log('response');
        //     console.log(response);
        //     this.form = response;
        // }
        // catch (err) {
        //     console.log('ERROR GET ALL COURSES');
        //     console.error(err);
        //     this.$toast.error('Произошла ошибка при получении курсов. Попробуйте позже или обратитесь в техподдержку.');
        // }
    },
};
</script>

<style scoped>

</style>