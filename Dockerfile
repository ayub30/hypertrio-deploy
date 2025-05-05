FROM node:18-alpine AS builder

WORKDIR /app


COPY hypertrio/package.json hypertrio/package-lock.json ./

RUN npm install


COPY hypertrio .

EXPOSE 3000

CMD ["npm", "run", "dev"]
