FROM node:lts-alpine
WORKDIR /app

# Enable corepack and install pnpm dependencies
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# If your 'preview' command requires a build step, uncomment and adjust:
RUN pnpm build

# Expose the port the application will listen on
EXPOSE 3000

# Command to run the preview server
CMD ["pnpm", "preview", "--port", "3000", "--host"]