<template>
	<div>
		<section id="course" class="section tw-mt-16 courses">
			<div
				:class="!form ? 'tw-animate-pulse tw-bg-pr-blue tw-h-16' : ''"
				:style="!form ? 'border-radius: 16px;' : ''"
				class="title title--left"
			>
				<h2>{{ form ? form.title : "" }}</h2>
			</div>

			<div v-if="form" class="courses__body">
				<div class="course__wrapper course__wrapper--full">
					<div
						class="course__avatar"
						v-bind:style="{
							'background-image':
								'url(' + $axios.defaults.baseURL + form.avatar + ')',
						}"
					/>
					<div class="course__info">
						<div class="course__info__bg" />
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
					</div>

					<div class="course__action">
						<ButtonDefault align="right" class="btn--default">
							<NuxtLink :to="`/courses/${$route.params.id}/learn`"
								>Перейти</NuxtLink
							>
						</ButtonDefault>
					</div>
				</div>
			</div>
			<div
				v-else
				class="courses__body tw-flex tw-items-center tw-animate-pulse"
			>
				<div class="course__wrapper course__wrapper--full">
					<div class="course__avatar" />
					<div class="course__info">
						<div class="course__info__bg" />
						<div class="course__info__title" />
						<div class="course__info__description" />
						<div class="course__info__status" />
						<div class="course__info__likes" />
					</div>
				</div>
			</div>
		</section>

		<section class="section tw-mt-16 courses">
			<div
				v-if="elements"
				class="tw-space-y-6 tw-flex tw-flex-col tw-justify-items-center"
			>
				<template v-for="(elem, id) in elements">
					<div
						class="tw-pt-12 tw-w-5/6 tw-place-self-center tw-mb-12  tw-pointer-events-none"
						:key="id"
						v-html="getElement(elem)"
					></div>
				</template>
			</div>
		</section>

		<section id="course__sections" class="section tw-mt-16 courses">
			<div v-if="sections" class="courses__body tw-space-y-6">
				<h2 class="tw-text-center">Разделы курса</h2>
				<div
					class="
						tw-grid tw-items-center tw-justify-center tw-grid-cols-2 tw-gap-4
					"
				>
					<template v-for="section in sections">
						<CourseElementSections :key="section.id" :title="section.title">
							<div v-html="section.description"></div>
						</CourseElementSections>
					</template>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "CourseIdIndex",
	data() {
		return {
			form: null,
			sections: null,
			elements: null,
		};
	},
	// call fetch only on client-side
	// TODO: УБРАТЬ!!!
	fetchOnServer: false,
	async fetch() {
		try {
			const response = await this.$axios.$get(
				this.$axios.defaults.baseURL + "courses/get/" + this.$route.params.id
			);
			console.log("response");
			console.log(response);
			this.form = response;
		} catch (err) {
			console.log("ERROR GET ALL COURSES");
			console.error(err);
			this.$toast.error(
				"Произошла ошибка при получении курсов. Попробуйте позже или обратитесь в техподдержку."
			);
		}

		try {
			const response = await this.$axios.$get(
				this.$axios.defaults.baseURL +
					"courses/get/" +
					this.$route.params.id +
					"/about"
			);
			console.log("response");
			console.log(response);

			// this.page =
			this.sections = response.sections;
			this.elements = response.about.sort((a, b) =>
				a.id > b.id ? 1 : b.id > a.id ? -1 : 0
			);
		} catch (err) {
			console.log("ERROR GET ALL COURSES");
			console.error(err);
			this.$toast.error(
				"Произошла ошибка при получении страницы. Попробуйте позже или обратитесь в техподдержку."
			);
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.$nuxt.$loading.start();

			setTimeout(() => this.$nuxt.$loading.finish(), 500);
		});
	},
	methods: {
		getElement(element) {
			if (element.type == "image") {
				return `<img class="tw-w-full" src="${
					this.$axios.defaults.baseURL + element.body.substring(1)
				}">`;
			} else {
				return element.body;
			}
		},
	},
};
</script>

<style scoped>
</style>