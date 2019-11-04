FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build


RUN npm install http-server -g

RUN ls 

WORKDIR dist/

CMD http-server

EXPOSE 8080