
FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM base AS check
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run lint:check
RUN bun run typecheck
RUN bun test

FROM base AS release
WORKDIR /app

COPY --from=install /app/node_modules ./node_modules
COPY src/ ./src/
COPY package.json ./

USER bun
ENTRYPOINT ["bun", "run", "src/app.ts"]
