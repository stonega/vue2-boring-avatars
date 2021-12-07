<template>
  <svg
    :viewBox="`0 0 ${viewboxSize} ${viewboxSize}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <mask
      id="mask__beam"
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
    <g mask="url(#mask__beam)" fill="transparent">
      <rect
        :width="viewboxSize"
        :height="viewboxSize"
        :fill="data.backgroundColor"
      />
      <rect
        x="0"
        y="0"
        :width="viewboxSize"
        :height="viewboxSize"
        :transform="`translate(${data.wrapperTranslateX} ${
          data.wrapperTranslateY
        }) rotate(${data.wrapperRotate} ${viewboxSize / 2} ${
          viewboxSize / 2
        }) scale(${data.wrapperScale})`"
        :fill="data.wrapperColor"
        :rx="data.isCircle ? viewboxSize : viewboxSize / 6"
      />
      <g
        :transform="`translate(${data.faceTranslateX} ${
          data.faceTranslateY
        }) rotate(${data.faceRotate} ${viewboxSize / 2} ${viewboxSize / 2})`"
      >
        <path
          v-if="data.isMonthOpen"
          :d="`M15 ${19 + data.mouthSpread} c2 1
        4 1 6 0`"
          :stroke="data.faceColor"
          fill="none"
          strokeLinecap="round"
        />
        <path
          v-else
          :d="`M13, ${19 + data.mouthSpread} a1,0.75 0 0,0 10,0`"
          :fill="data.faceColor"
        />
        <rect
          :x="14 + data.eyeSpread"
          y="14"
          width="1.5"
          height="2"
          rx="1"
          stroke="none"
          :fill="data.faceColor"
        />
        <rect
          :x="20 + data.eyeSpread"
          y="14"
          width="1.5"
          height="2"
          rx="1"
          stroke="none"
          :fill="data.faceColor"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import {
  getNumber,
  getUnit,
  getRandomColor,
  getBoolean,
  getContrast,
} from "@/utils";
const SIZE = 36;
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
    data() {
      const numFromName = getNumber(this.name);
      const range = this.colors && this.colors.length;
      const wrapperColor = getRandomColor(numFromName, this.colors, range);
      const preTranslateX = getUnit(numFromName, 10, 1);
      const wrapperTranslateX =
        preTranslateX < 5 ? preTranslateX + SIZE / 9 : preTranslateX;
      const preTranslateY = getUnit(numFromName, 10, 2);
      const wrapperTranslateY =
        preTranslateY < 5 ? preTranslateY + SIZE / 9 : preTranslateY;

      const data = {
        wrapperColor: wrapperColor,
        faceColor: getContrast(wrapperColor),
        backgroundColor: getRandomColor(numFromName + 13, this.colors, range),
        wrapperTranslateX: wrapperTranslateX,
        wrapperTranslateY: wrapperTranslateY,
        wrapperRotate: getUnit(numFromName, 360),
        wrapperScale: 1 + getUnit(numFromName, SIZE / 12) / 10,
        isMouthOpen: getBoolean(numFromName, 2),
        isCircle: getBoolean(numFromName, 1),
        eyeSpread: getUnit(numFromName, 5),
        mouthSpread: getUnit(numFromName, 3),
        faceRotate: getUnit(numFromName, 10, 3),
        faceTranslateX:
          wrapperTranslateX > SIZE / 6
            ? wrapperTranslateX / 2
            : getUnit(numFromName, 8, 1),
        faceTranslateY:
          wrapperTranslateY > SIZE / 6
            ? wrapperTranslateY / 2
            : getUnit(numFromName, 7, 2),
      };

      return data;
    },
  },
};
</script>