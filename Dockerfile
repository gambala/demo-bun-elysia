FROM oven/bun:alpine

WORKDIR /app

COPY --link package.json bun.lockb /app/
RUN bun install --production

COPY --link src src
COPY --link tsconfig.json .
# COPY public public

ENV NODE_ENV="production"
CMD ["bun", "src/index.tsx"]

EXPOSE 3000
