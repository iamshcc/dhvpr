# Stage 1: Build Vue application
FROM oven/bun:1-alpine AS build-stage
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install
COPY . .
RUN bun run build

# Stage 2: Production server (served via a minimal Nginx runtime)
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]