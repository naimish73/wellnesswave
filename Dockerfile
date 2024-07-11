# Use the official Node.js image with Alpine Linux as a base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY . /app

# Install npm dependencies
RUN npm install

# Expose ports
EXPOSE 5000
EXPOSE 5173
CMD npm run dev && node /src/backend/server.cjs


# CMD to start backend and frontend
# CMD npm run dev
