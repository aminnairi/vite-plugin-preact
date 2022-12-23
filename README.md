# vite-plugin-preact

Preact preset for Vite

[![NPM](https://badgen.net/npm/v/vite-plugin-preact)](https://www.npmjs.com/package/vite-plugin-preact) ![TypeScript](https://badgen.net/npm/types/vite-plugin-preact) [![Test](https://github.com/aminnairi/vite-plugin-preact/actions/workflows/test.yaml/badge.svg?branch=development)](https://github.com/aminnairi/vite-plugin-preact/actions/workflows/test.yaml) ![Snyk](https://badgen.net/snyk/aminnairi/vite-plugin-preact)

## Requirements

- [Node](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)

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

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).

## License

See [`LICENSE`](./LICENSE).

## Issue

See [`issues`](../../issues).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Security

See [`SECURITY.md`](./SECURITY.md).
