FROM node:16-alpine3.11

EXPOSE 3000
WORKDIR /app

COPY index.js package.json package-lock.json .

RUN npm install

CMD ["npm", "start"]
