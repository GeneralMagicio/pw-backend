FROM node:20-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .
RUN npm run build
EXPOSE 7070
ENTRYPOINT ["sh", "-c", "npx prisma migrate deploy && npm run start"]