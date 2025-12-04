FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install curl
RUN apk add --no-cache curl

# Enable Corepack (manages pnpm automatically)
RUN corepack enable

# Copy package.json and pnpm-lock.yaml (if you have one)
COPY package*.json pnpm-lock.yaml* ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the app code
COPY . .

# Expose the port
EXPOSE 4000

# Start the application
CMD ["pnpm", "start"]
