import { Plugin } from "vite"

export const preact = (): Plugin => {
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
