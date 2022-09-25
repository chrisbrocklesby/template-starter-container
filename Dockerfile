FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci --omit=dev
COPY . .

EXPOSE 3003
CMD [ "node", "index.js" ]