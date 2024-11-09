FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV PORT=80
EXPOSE 80

ENTRYPOINT ["npm", "run", "start"]
