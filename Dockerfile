FROM node:24-trixie-slim AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:24-trixie-slim AS production

WORKDIR /app

COPY --from=builder /app/package*.json .

RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist

RUN npm install -g --omit=dev . && npm cache clean --force

USER node

ENTRYPOINT ["brain-games"]
