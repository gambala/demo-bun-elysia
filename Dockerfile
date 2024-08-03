FROM oven/bun:alpine

WORKDIR /app

# Install curl for Kamal health checks
RUN apk add --no-cache curl

COPY --link package.json bun.lockb /app/
RUN bun install --production

COPY --link src src
COPY --link tsconfig.json .
# COPY public public

ENV NODE_ENV="production"
CMD ["bun", "src/index.tsx"]

EXPOSE 3000
