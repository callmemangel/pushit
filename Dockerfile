FROM node:latest as build

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 80 8080 8081

ENTRYPOINT ["node", "Server.js"]
