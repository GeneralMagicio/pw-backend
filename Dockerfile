FROM node:20-alpine3.17

WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .
RUN npm run build
RUN npx prisma migrate deploy
EXPOSE 7070
CMD ["npm", "run", "start"]
