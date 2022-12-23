import { test, expect } from "vitest"
import { preact } from "."

test("it should return the expected configuration", () => {
  const { name } = preact()

  expect(name).toStrictEqual("preact")
})

test("it should return the correct configuration", () => {
  const { config } = preact()

  if (typeof config !== "function") {
    throw new Error("Configuration is not callable")
  }

  const configuration = config({}, {command: "build", mode: "development"})

  expect(configuration).toStrictEqual({
    esbuild: {
      jsx: "automatic",
      jsxImportSource: "preact"
    }
  })
})
