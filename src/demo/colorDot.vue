<template>
  <main class="main">
    <div
      @click="() => (showPicker = !showPicker)"
      class="color-dot"
      :style="{ backgroundColor: color }"
    ></div>
    <transition name="fade">
      <chrome
        v-if="showPicker"
        :value="color"
        @input="(value) => updateColor(value)"
        class="chrome-picker"
      />
    </transition>
  </main>
</template>

<script>
import { Chrome } from "vue-color";

export default {
  name: "ColorDot",
  components: { Chrome },
  props: {
    color: { type: String, required: true },
  },
  data() {
    return {
      showPicker: false,
    };
  },
  methods: {
    updateColor(colors) {
      this.showPicker = false;
      this.$emit("input", colors.hex);
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
}
.color-dot {
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}
.chrome-picker {
  position: absolute;
  top: 3rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>