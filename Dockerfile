FROM oven/bun:alpine
  WORKDIR /app

  COPY --link package.json bun.lock /app/
  RUN bun install --production

  COPY --link src src
  COPY --link tsconfig.json .
  # COPY public public

  ENV NODE_ENV="production"

  EXPOSE 3000
  CMD ["bun", "src/index.tsx"]
