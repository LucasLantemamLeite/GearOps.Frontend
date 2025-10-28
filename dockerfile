# Stage 1 - Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2 - Run
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/.output ./.output

COPY --from=build /app/package*.json ./

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]