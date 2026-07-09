# Stage 1: Install dependencies
FROM oven/bun:1-alpine AS base
WORKDIR /app

# Copy lock and package files first to leverage Docker layer caching
COPY package.json bun.lock* ./
RUN bun install --registry https://registry.npmmirror.com

# Stage 2: Production runner
FROM oven/bun:1-alpine AS runner
WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["bun", "run", "src/index.ts"]
