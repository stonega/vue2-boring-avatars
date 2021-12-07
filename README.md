# vue2-boring-avatars

Vue port of [Boring Avatars](https://github.com/boringdesigners/boring-avatars)

## Install

```
yarn add vue2-boring-avatars
```
```
npm i vue2-boring-avatars
```

## Usage
```
import Avatar from 'vue2-boring-avatars'
```
```
<avatar :variant="variant" :colors="colors" :name="name" />
```                

## Demo
```
yarn serve
```

## Props

| Prop    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| size    | number or string                                             |
| name    | string                                                       |
| variant | oneOf: `marble`, `beam`, `pixels`,`sunset`, `ring`, `bauhaus` |
| colors  | array of colors                                              |
| square  | bool                                              |

Credit to original [Boring Avatars](https://github.com/boringdesigners/boring-avatars) library.
