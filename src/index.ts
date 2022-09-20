import type { Preset } from "unocss"

const remRE = /^-?[\.\d]+rem$/

export default function presetRemTransform(multiplier = 1): Preset {
  if (multiplier <= 0) {
    throw new Error("multiplier must be greater than 0")
  }

  return {
    name: "unocss-preset-rem-transform",
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === "string" && remRE.test(value))
          i[1] = `${+value.slice(0, -3) * multiplier}rem`
      })
    },
  }
}
