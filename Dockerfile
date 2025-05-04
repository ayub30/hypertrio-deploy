FROM node:18-alpine AS builder

WORKDIR /app

COPY ./hypertrio ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
