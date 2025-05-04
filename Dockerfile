FROM node:18-alpine AS builder

WORKDIR /hypertrio

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]