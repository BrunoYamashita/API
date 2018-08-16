FROM node:latest

RUN npm install pm2 -g -s

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -s

COPY . .

EXPOSE 8000

CMD ["npm" ,"start"]
