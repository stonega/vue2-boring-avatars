<template>
  <svg
    :viewBox="`0 0 ${viewboxSize} ${viewboxSize}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <mask
      id="mask__sunset"
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
    <g mask="url(#mask__sunset)">
      <path
        :fill="`url(#gradient_paint0_linear_${shortName})`"
        d="M0 0h80v40H0z"
      />
      <path
        :fill="`url(#gradient_paint1_linear_${shortName})`"
        d="M0 40h80v40H0z"
      />
    </g>
    <defs>
      <linearGradient
        :id="`gradient_paint0_linear_${shortName}`"
        :x1="viewboxSize / 2"
        y1="0"
        :x2="viewboxSize / 2"
        :y2="viewboxSize / 2"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="properties[0].color" />
        <stop offset="1" :stop-color="properties[1].color" />
      </linearGradient>
      <linearGradient
        :id="`gradient_paint1_linear_${shortName}`"
        :x1="viewboxSize / 2"
        :y1="viewboxSize / 2"
        :x2="viewboxSize / 2"
        :y2="viewboxSize"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="properties[2].color" />
        <stop offset="1" :stop-color="properties[3].color" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import { getNumber, getRandomColor } from "@/utils";
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
    shortName() {
      return this.name.replace(/\s/g, "");
    },
    properties() {
      const numFromName = getNumber(this.name);
      const range = this.colors && this.colors.length;

      const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
        color: getRandomColor(numFromName + i, this.colors, range),
      }));

      return elementsProperties;
    },
  },
  filters: {
    short(value) {
      return value.replace(/\s/g, "");
    },
  },
};
</script>