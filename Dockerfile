FROM node:18-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /dock

COPY package.json package-lock.json /dock/
RUN npm install

COPY tsconfig.json next.config.mjs /dock/

# Copy the rest of the application files
COPY . .

RUN npm install typescript -g
RUN tsc

EXPOSE 3000

# Start the TypeScript compiler in watch mode
CMD ["npm", "run", "dev"]