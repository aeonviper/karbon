FROM node:10-alpine
WORKDIR /system
COPY package.json .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ]
COPY index.js .