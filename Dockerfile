FROM node:18-alpine
WORKDIR /App
COPY . /App
RUN npm install
EXPOSE 3000
CMD npm start
