FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

RUN npm install expo-cli -g

RUN npm install --lecacy--peer-deps

RUN npm run build -prod

EXPOSE 3000

CMD "npm" "run" "start-tls"
# CMD "npm" "run" "start"