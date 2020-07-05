FROM node:10-alpine
WORKDIR /system
COPY package.json .
RUN npm install
EXPOSE 10080
EXPOSE 10443
CMD [ "npm", "run", "start" ]
COPY index.js .