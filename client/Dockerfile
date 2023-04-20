# Build Stage
FROM node:19-alpine3.16 AS builder

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

# Production Stage
FROM nginx:1.21.1-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /client/dist .

CMD ["nginx", "-g", "daemon off;"]