FROM node:18-alpine AS builder

# Use absolute path for WORKDIR
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY ./hypertrio/package.json ./hypertrio/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./hypertrio .

EXPOSE 3000

CMD ["npm", "run", "dev"]
