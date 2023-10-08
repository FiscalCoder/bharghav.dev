# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
# RUN npm prisma generate

COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port the app will run on
EXPOSE 3050

# Start the application
CMD [ "npm", "run","serve"]
