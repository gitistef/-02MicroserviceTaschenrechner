FROM node:19.9.0-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node","service.js"]