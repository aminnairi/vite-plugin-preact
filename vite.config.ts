import { defineConfig } from "vite"
import { preact } from "./sources"

export default defineConfig({
  plugins: [
    preact()
  ],
  build: {
    lib: {
      entry: "sources/index.ts",
      name: "vite-plugin-preact",
      fileName: "index"
    }
  }
})
