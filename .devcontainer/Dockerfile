FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container
COPY package*.json ./

# Install app dependencies
RUN yarn

# Add app
COPY . .

# Start app
CMD ["yarn", "start"]