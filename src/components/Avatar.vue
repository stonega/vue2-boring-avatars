<template>
  <component :is="componentName" :name="name" :colors="colors" :size="size" />
</template>

<script>
import AvatarPixels from './AvatarPixels'
import AvatarBauhaus from './AvatarBauhaus'
import AvatarMarble from './AvatarMarble'
import AvatarRing from './AvatarRing'
import AvatarSunset from './AvatarSunset'
import AvatarBeam from './AvatarBeam'

const VARIANTS = ['pixels', 'bauhaus', 'ring', 'beam', 'sunset', 'marble']

export default {
  components: {
    AvatarPixels,
    AvatarBauhaus,
    AvatarMarble,
    AvatarSunset,
    AvatarRing,
    AvatarBeam
  },
  props: {
    variant: {
      type: String,
      default: 'pixels',
      validator(value) {
        return VARIANTS.includes(value)
      }
    },
    name: { type: String, default: 'Mary Baker' },
    colors: {
      type: Array,
      default: () => ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']
    },
    size: { type: Number, default: 80 }
  },
  computed: {
    componentName() {
      if (!VARIANTS.includes(this.variant)) {
        return 'avatar-pixels'
      }
      return 'avatar-' + this.variant
    }
  }
}
</script>
