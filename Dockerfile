# Use the official Node.js 14 image as a base
FROM node:18.12.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (the default port used by NestJS)
EXPOSE 3000

ENV DATABASE_HOST=34.128.107.7
ENV DATABASE_PORT=5432
ENV DATABASE_USERNAME=postgres
ENV DATABASE_NAME=skripsi
ENV DATABASE_PASSWORD=postgres

# Command to run the application
CMD ["npm", "run", "start:prod"]
