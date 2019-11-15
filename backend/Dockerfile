FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
COPY ./ .

RUN npm install && apt-get update && apt-get install sqlite3 && npm run setup && npm run initDb

CMD npm run start

EXPOSE 4000