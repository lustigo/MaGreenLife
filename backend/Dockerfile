FROM node:alpine as build-stage
ARG RNVAPITOKEN
WORKDIR /app
RUN apk --no-cache add sqlite python build-base
COPY . .
RUN npm install
RUN npm run setup
RUN npm run initDb

FROM node:alpine
WORKDIR /app
RUN apk --no-cache add sqlite python build-base
COPY package* ./
RUN npm install --production
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/*.sqlite ./
EXPOSE 4000
CMD node dist/index.js
