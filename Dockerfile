FROM node:latest as build

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

EXPOSE 80 8080 8081

ENTRYPOINT ["node", "Server.js"]
