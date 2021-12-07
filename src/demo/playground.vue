<template>
  <div id="app">
    <div class="header">
      <div class="panel">
        <div class="variant-picker">
          <div
            v-for="(v, index) in variants"
            :key="index"
            class="variant-tag"
            :class="{active: v === variant}"
            @click="() => (variant = v)"
          >
            {{ v }}
          </div>
        </div>
        <input type="checkbox" id="shape" name="shape" v-model="square">
        <div class="square">Square</div>
        <div class="color-button">
          <div v-for="(color, index) in colors" :key="index">
            <color-dot
              :color="color"
              @input="(event) => updateColors(event, index)"
            />
          </div>
        </div>
      </div>
    </div>
    <section class="avatar-list">
      <div v-for="(name, index) in names" :key="index">
        <avatar :variant="variant" :colors="colors" :name="name" :square="square" />
        <p>{{ name }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import Avatar from "../components/Avatar.vue";
import ColorDot from "./colorDot.vue";

const VARIANTS = ["pixels", "bauhaus", "ring", "beam", "sunset", "marble"];
export default {
  name: "Playground",
  components: {
    Avatar,
    ColorDot,
  },
  data() {
    return {
      colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
      variants: VARIANTS,
      variant: "pixels",
      square: false,
      names: ["Tether", "Uniswap", "ChainLink", "Automata", "Binance"],
    };
  },
  methods: {
    updateColors(color, index) {
      this.colors.splice(index, 1, color);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0.5rem;
}
.variant-picker {
  background-color: gray;
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-right: 2rem;
}
.variant-tag {
  border-radius: 5rem;
  padding: 0.5rem;
  background-color: grey;
  cursor: pointer;
}
.variant-tag:hover{
  background-color: #9CA3AF;
}
.active {
  background-color: #9CA3AF;
}
.panel {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.color-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
}
.avatar-list {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.square {
  padding-right: 1rem;
}
</style>