FROM node-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose a port (e.g., 3000) that the application will listen on
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]