# TS init

A template repository for TypeScript projects using Bun.

Svelte version: https://github.com/SirMorfield/svelte_init

## Prerequisites

- [Bun](https://bun.sh/) (v1.2+)

## Usage

```sh
bun install
bun run dev       # watch mode
bun run start     # run directly
bun test          # run tests
bun run typecheck # type check without emitting
bun run lint:check
bun run format:check
```

### VS Code

- Install the `dbaeumer.vscode-eslint` extension
- Install the `oven.bun-vscode` extension for debugging

## Features

- Bun runtime (no Node.js required)
- TypeScript with strict mode
- ESLint v9 flat config
- Prettier (standalone, not coupled to ESLint)
- Bun test runner
- Lint + format + typecheck in CI pipeline
- Pre-commit hook for linting, formatting, and type checking
- Containerized with Docker (multi-stage Bun image)
- Pushes image to container registry on merge to main
- Watchtower for automatic container updates

## TODO

- Caching in Docker (compose)
- Improve containerize.yaml to also support tags
