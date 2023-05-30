FROM node:20

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install && npm run preinstall

EXPOSE 3080

CMD ["npm", "run", "dev"]