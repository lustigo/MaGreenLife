FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
COPY ./ .
RUN npm install &&  npm run build && npm install http-server -g

WORKDIR dist/

CMD http-server

EXPOSE 8080