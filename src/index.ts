import type { Preset } from "unocss"

const remRE = /^-?[\.\d]+rem$/

export interface RemTransformOptions {
  multiplier: number
  divisor: number
}

export default function presetRemTransform(
  options: Partial<RemTransformOptions>,
): Preset {
  const { multiplier = 1, divisor = 1 } = options

  if (multiplier < 0) throw new Error("multiplier must > 0")

  if (divisor < 0) throw new Error("divisor must > 0")

  return {
    name: "unocss-preset-rem-transform",
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === "string" && remRE.test(value))
          i[1] = `${(+value.slice(0, -3) * multiplier) / divisor}rem`
      })
    },
  }
}
