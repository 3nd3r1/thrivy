FROM node:20

ARG PORT=80
ENV PORT=80

ARG DATABASE_URL=${DATABASE_URL}
ENV DATABASE_URL=${DATABASE_URL}

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


EXPOSE 80

ENTRYPOINT ["npm", "run", "start"]
