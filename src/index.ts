import type { Preset } from "unocss"

const remRE = /^-?[\.\d]+rem$/

export interface RemTransformOptions {
  transform?: number | ((value: number) => number)
}

export default function presetRemTransform(
  options: RemTransformOptions = {},
): Preset {
  const { transform = 1 } = options

  return {
    name: "unocss-preset-rem-transform",
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === "string" && remRE.test(value))
          i[1] =
            typeof transform === "function"
              ? `${transform(+value.slice(0, -3))}rem`
              : `${+value.slice(0, -3) * transform}rem`
      })
    },
  }
}
