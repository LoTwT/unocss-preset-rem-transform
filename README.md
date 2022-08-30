# unocss-preset-rem-transform

Transform rem as you want by multiplication and division.

## installation

```bash
pnpm i unocss-preset-rem-transform -D
```

## config

```ts
interface RemTransformOptions {
  multiplier: number
  divisor: number
}
```

```ts
// unocss.config.ts
import presetRemTransform from "unocss-preset-rem-transform"

export default defineConfig({
  // base rem unit would be 0.25 * 100 / 10 = 2.5
  presets: [presetRemTransform({ multipiler: 100, divisor: 10 })],
})
```

## usage

Due to the [hardcode](https://github.com/unocss/unocss/blob/59e6c343d5645d547349721e9abfc5bb62ecdd80/packages/preset-mini/src/_utils/handlers/handlers.ts#L54), base rem unit is `0.25` .

if you'd like the base rem unit to be `1` which means `p-1 => { padding : 1rem }`, you can config like is:

```ts
// multipiler
// if transform is a number, result will be 0.25 * 4
presetRemTransform({ multipiler: 4 })
```

## Thanks :heart:

- [@unocss/preset-rem-to-px](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px)

## License

[MIT](./LICENSE)
