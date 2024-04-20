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

COPY .env ./

# Command to run the application
CMD ["npm", "run", "start:prod"]
