FROM node:18-alpine
WORKDIR /system
COPY package.json .
COPY index.js .
RUN npm install
EXPOSE 10080
EXPOSE 10443
CMD [ "npm", "run", "start" ]
