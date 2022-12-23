# vite-plugin-preact

Preact preset for Vite

## Requirements

- Node
- NPM

## Installation

```bash
npm install --save-dev vite-plugin-preact
```

## Usage

```typescript
import { defineConfig } from "vite"
import { preact } from "vite-plugin-preact"

export default defineConfig({
  plugins: [
    preact()
  ]
})
```
