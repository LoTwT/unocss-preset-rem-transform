import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"
import presetRemTransform from "unocss-preset-rem-transform"

export default defineConfig({
  shortcuts: [
    [
      "btn",
      "border border-rounded border-blue-600 px-4 py-2 w-full rounded inline-block bg-blue-600 text-white cursor-pointer hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:border-gray-700 disabled:opacity-50",
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    // transform is function
    presetRemTransform(8),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-sm m-auto text-left".split(" "),
})
