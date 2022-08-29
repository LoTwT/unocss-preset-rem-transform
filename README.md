# unocss-preset-rem-transform

Transform base rem as you want.

## installation

```bash
pnpm i unocss-preset-rem-transform -D
```

## config

```ts
// unocss.config.ts
import presetRemTransform from "unocss-preset-rem-transform"

export default defineConfig({
  presets: [
    // choose one of the following usages you prefer
    // transform is number
    presetRemTransform({ transform: 4 }),
    // transform is function
    presetRemTransform({ transform: (value) => value * 8 }),
  ],
})
```

## usage

Due to the [hardcode](https://github.com/unocss/unocss/blob/59e6c343d5645d547349721e9abfc5bb62ecdd80/packages/preset-mini/src/_utils/handlers/handlers.ts#L54), base rem unit is `0.25` .

if you'd like the base rem unit to be `1` which means `p-1 => { padding : 1rem }`, you can config like is:

```ts
// multipiler
// if transform is a number, result will be 0.25 * 4
presetRemTransform({ transform: 4 })
```

or

```ts
// result will be the return value
// full control
presetRemTransform({ transform: (value) => value * 4 })
```

## Thanks :heart:

- [@unocss/preset-rem-to-px](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px)

## License

[MIT](./LICENSE)
