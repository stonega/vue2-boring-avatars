import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';

const plugins = [
  del({ targets: 'dist/*' }),
  alias({
    entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }),
  resolve(),
  commonjs(),
  vue(),
  esbuild({
    target: 'es2017',
    minify: true,
  }),
];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'vue-2-boring-avatars',
        file: 'dist/vue-2-boring-avatars.es.js',
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
    ],
    plugins,
    external: ['vue'],
  },
];
