<template>
  <div class="my-section pa-4" :style="getMyStyle">
    <img class="my-section-image" v-if="backgroundImage" :src="backgroundImage"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "MySection",
  props: {
    backgroundImage: String,
    backgroundColor: String
  },
  computed: {
    getMyStyle () {
      return {
        'background-color': this.backgroundColor
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-section
  height 500px
  position relative
  &-image
    position: absolute
    left 0
    top 0
    width 100%
    height 100%
</style>