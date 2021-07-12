<template>
  <div class="">
    <div class="tab__header">
      <a
        href="#"
        class="
          tab__link
          p-4
          block
          bg-blue-dark
          hover:bg-blue-darker
          no-underline
          text-white
          border-b-2 border-white
          flex
          justify-between
        "
        @click.prevent="active = !active"
      >
        <p class="course__info__title">{{ title }}</p>
        <span class="down-Arrow" v-show="!active">&#9660;</span>
        <span class="up-Arrow" v-show="active">&#9650;</span>
      </a>
    </div>
    <div class="course__info__description" v-show="active"><slot /></div>
  </div>
</template>

<script>
export default {
  name: "Sections",
  props: ["title"],
  data() {
    return {
      active: false,
    }
  }
};
</script>

<style scope>
</style>