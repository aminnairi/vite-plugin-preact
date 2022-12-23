import { PluginOption } from "vite"
import { CommonOptions } from "esbuild"

export const preact = (): PluginOption => {
  return {
    name: "preact",
    config: () => {
      return {
        esbuild: {
          jsx: "automatic",
          jsxImportSource: "preact"
        }
      }
    }
  }
}
