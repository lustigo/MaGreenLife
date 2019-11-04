FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN apt-get update && apt-get install sqlite3
RUN npm run setup
RUN npm run initDb


CMD npm run start

EXPOSE 4000