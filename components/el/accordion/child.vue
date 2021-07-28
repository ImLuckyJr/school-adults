<template>
	<div class="accodion__item tw-mr-10 tw-pt-10">
		<div
			@click="click()"
			class="
				accodion__item__button
				tw-flex tw-flex-row tw-justify-between tw-items-center tw-pb-3
			"
		>
			<div>
				<span class="accodion__title">{{ data.title.split(".")[0] }}</span>
				<br />
				<span class="accodion__subtitle">{{ data.title.split(".")[1] }}</span>
			</div>
			<svg
				:class="this.isOpen ? 'tw-transform tw-rotate-180' : ''"
				width="30"
				height="18"
				viewBox="0 0 30 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.8232 17.6202L29.6607 2.20457C30.1139 1.6995 30.1131 0.881769 29.6584 0.377539C29.2038 -0.1263 28.4673 -0.124998 28.0139 0.380143L14.9999 14.8782L1.98609 0.379621C1.53258 -0.125455 0.796585 -0.126757 0.3419 0.377017C0.113972 0.629783 5.68456e-06 0.960924 5.67164e-06 1.29206C5.65876e-06 1.62236 0.113209 1.9522 0.339556 2.20451L14.1767 17.6202C14.3946 17.8635 14.691 18 14.9999 18C15.3089 18 15.605 17.8631 15.8232 17.6202Z"
					fill="#F76D6D"
				/>
			</svg>
		</div>
		<div class="accodion__item__panel " :class="this.isOpen ? 'tw-visible' : 'tw-invisible tw-h-0'">
			<div v-html="data.description"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Accordion-child",
	props: {
		data: {
			type: Object,
			require: true,
			default: {
				title: "",
				description: "",
			},
		},
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		click() {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style>
</style>