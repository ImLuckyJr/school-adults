<template>
  <div>
    <section id="courses" class="section tw-mt-16 courses">
      <div class="tw-flex tw-flex-row tw-justify-between">
        <div
          class="
            2xl:tw-w-auto
            xl:tw-w-auto
            lg:tw-w-auto
            md:tw-w-full
            sm:tw-w-full
          "
        >
          <div class="title">
            <h2>Курсы</h2>
          </div>
        </div>

        <div
          class="
            2xl:tw-w-auto
            xl:tw-w-auto
            lg:tw-w-auto
            md:tw-w-full
            sm:tw-w-full
          "
        >
          Тут поиск
        </div>
      </div>

      <div
        class="tw-flex tw-flex-row tw-justify-between tw-gap-24 courses__body"
      >
        <div
          class="
            courses__partitions
            2xl:tw-w-1/6
            xl:tw-w-1/6
            lg:tw-w-16
            md:tw-w-full
            sm:tw-w-full
          "
        >
          <div
            v-for="(part, partIndex) in allCoursesPartitions"
            :key="partIndex"
            :class="{
              'disable-button': part.disableButton,
              active: part.active,
            }"
            class="courses__partition"
          >
            {{ part.label }}
          </div>
        </div>

        <div class="courses__body">
          <div
            v-for="(course, courseIndex) in courses"
            :key="courseIndex"
            class="course__wrapper"
          >
            <div class="course__avatar"></div>
            <div class="course__info">
              <div class="course__info__title">{{ course.fields.title }}</div>
              <div class="course__info__description">
                {{ course.fields.description }}
              </div>
              <div class="course__info__status">
                <div class="users">
                  {{ course.fields.users ? course.fields.users : 505 }}
                </div>
                <div class="rating">{{ course.fields.rating }}</div>
                <div class="time">{{ course.fields.difficulty }}</div>
              </div>
              <div class="course__info__likes">{{ course.fields.likes ? course.fields.likes : 123 }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "courses",
  data() {
    return {
      courses: []
    };
  },
  async fetch() {
    this.courses = JSON.parse(await this.$axios.$get(
      this.$axios.defaults.baseURL + "courses/list"
    ));
  },
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
          label: "Все разделы",
          disableButton: false,
          active: true,
        },
        {
          label: "Раздел 1",
          disableButton: true,
          active: false,
        },
        {
          label: "Раздел 2",
          disableButton: true,
          active: false,
        },
        {
          label: "Раздел 3",
          disableButton: true,
          active: false,
        },
      ];
    },
  },
};
</script>

<style lang="scss">
#courses {
  .courses {
    $self: &;

    &__body {
      .courses__partitions {
      }

      .courses__partition {
        font-size: 18px;
        line-height: 32px;
        color: #24315e;
        padding: 10px;
        width: 200px;
        border: 2px solid #374785;
        border-radius: 15px;
        margin-bottom: 1rem;
        position: relative;

        &.active {
          background-color: #374785;
          color: white;
        }

        &.disable-button::after {
          content: "cl";
          color: red;
          position: absolute;
          top: 0;
          bottom: 0;
          right: -30px;
        }
      }

      .course {
        color: black !important;

        &__wrapper {
          position: relative;
          display: flex;
          flex-direction: row;
          width: 100%;
          min-height: 255px;
          margin-bottom: 2rem;
        }

        &__avatar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 328px;
          height: 253px;
          background-image: url("~assets/images/фото курса.png");
          background-repeat: no-repeat;
          z-index: 1;
        }

        &__info {
          width: 609px;
          height: 253px;
          margin-left: 265px;
          position: relative;
          background-image: url("~assets/images/Group 52.svg");
          background-repeat: no-repeat;
          padding: 20px 90px;

          &__title {
            font-family: "AdamCG", sans-serif;
            font-size: 24px;
            line-height: 32px;
            color: #24315e;
            margin-bottom: 1rem;
          }

          &__description {
            font-size: 18px;
            line-height: 32px;
            color: #374785;
            margin-bottom: 1rem;
          }

          &__status {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            font-size: 14px !important;
            font-family: "AdamCG", sans-serif;

            > div {
              margin-right: 0.5rem;
            }
          }

          &__likes {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px !important;
            font-family: "AdamCG", sans-serif;
          }
        }
      }
    }
  }
}
</style>