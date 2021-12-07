<template>
  <svg
    :viewBox="`0 0 ${viewboxSize} ${viewboxSize}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <mask
      id="mask__bauhaus"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="viewboxSize"
      :height="viewboxSize"
    >
      <rect
        :width="viewboxSize"
        :height="viewboxSize"
        :rx="square ? undefinded : viewboxSize / 2"
        fill="#fff"
      />
    </mask>
    <g mask="url(#mask__bauhaus)">
      <rect
        :width="viewboxSize"
        :height="viewboxSize"
        :fill="properties[0].color"
      />
      <rect
        :x="(viewboxSize - 60) / 2"
        :y="(viewboxSize - 20) / 2"
        :width="viewboxSize"
        :height="properties[1].isSquare ? viewboxSize : viewboxSize / 8"
        :fill="properties[1].color"
        :transform="`translate(${properties[1].translateX} ${
          properties[1].translateY
        }) rotate(${properties[1].rotate} ${viewboxSize / 2} ${
          viewboxSize / 2
        })`"
      />
      <circle
        :cx="viewboxSize / 2"
        :cy="viewboxSize / 2"
        :fill="properties[2].color"
        :r="viewboxSize / 5"
        :transform="`translate(${properties[2].translateX} ${properties[2].translateY})`"
      />
      <line
        x1="0"
        :y1="viewboxSize / 2"
        :x2="viewboxSize"
        :y2="viewboxSize / 2"
        strokeWidth="2"
        :stroke="properties[3].color"
        :transform="`translate(${properties[3].translateX} ${
          properties[3].translateY
        }) rotate(${properties[3].rotate} ${viewboxSize / 2} ${
          viewboxSize / 2
        })`"
      />
    </g>
  </svg>
</template>
<script>
import { getNumber, getUnit, getRandomColor, getBoolean } from "@/utils";
const ELEMENTS = 4;
const SIZE = 80;

export default {
  props: {
    name: { type: String, required: true },
    colors: { type: Array, required: true },
    size: { type: Number, required: true },
    square: { type: Boolean, default: false }
  },
  data() {
    return {
      viewboxSize: SIZE,
    };
  },
  computed: {
    properties() {
      const numFromName = getNumber(this.name);
      const range = this.colors && this.colors.length;

      const elementProperties = Array.from({ length: ELEMENTS }, (_, i) => {
        return {
          color: getRandomColor(numFromName + i, this.colors, range),
          translateX: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 1),
          translateY: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 2),
          rotate: getUnit(numFromName * (i + 1), 360),
          isSqure: getBoolean(numFromName, 2),
        };
      });
      return elementProperties;
    },
  },
};
</script>