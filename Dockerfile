FROM node:lts-alpine AS base
RUN npm install -g pnpm@10.23.0

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
ARG DATABASE_URL
COPY . .
ENV DATABASE_URL=${DATABASE_URL}
RUN pnpm build

FROM base AS production
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY prisma.config.ts ./


COPY src/schemas/prisma ./src/schemas/prisma

RUN pnpm install --prod --frozen-lockfile && pnpm add -D prisma

COPY --from=build /app/dist ./dist

RUN apk add --no-cache wget

ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/health || exit 1
# To enable automatic migrations on container start, uncomment the following line:
#CMD ["sh", "-c", "pnpm prisma:migrate:deploy && pnpm start"]
CMD ["sh", "-c", "pnpm start"]