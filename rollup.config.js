import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser';

import path from 'path';

const plugins = [
  del({ targets: 'dist/*' }),
  alias({
    entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }),
  vue(),
];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'vue-2-boring-avatars',
        file: 'dist/vue-2-boring-avatars.mjs',
        format: 'esm',
        globals: { vue: 'Vue' },
        sourcemap: true,
      },
      {
        name: 'vue-2-boring-avatars',
        file: 'dist/vue-2-boring-avatars.common.js',
        format: 'cjs',
        exports: 'auto',
        globals: { vue: 'Vue' },
        sourcemap: true,
      },
      {
        name: 'vue-2-boring-avatars',
        file: 'dist/vue-2-boring-avatars.umd.js',
        format: 'umd',
        globals: { vue: 'Vue' },
        sourcemap: true,
      },
      {
        name: 'vue-2-boring-avatars',
        file: 'dist/vue-2-boring-avatars.umd.min.js',
        format: 'umd',
        globals: { vue: 'Vue' },
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins,
    external: ['vue'],
  },
];
