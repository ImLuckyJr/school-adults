<template>
	<div class="accodion tw-grid tw-grid-cols-2 tw-mt-10">
		<template
			v-for="(elem, id) in elements"
			class="accodion__item tw-mr-10 tw-pt-10"
		>
			<El-Accordion-Child :data="elem" :key="id" />
		</template>
	</div>
</template>

<script>


export default {
	name: "accodion",
	props: {
		elements: {
			type: Array,
			require: true
		},
	}
};
</script>

<style lang="scss" scoped>

</style>