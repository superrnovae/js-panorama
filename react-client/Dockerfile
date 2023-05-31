# pull official base image
FROM node:current-bullseye-slim

RUN npm i npm@latest vite -g

WORKDIR /usr/app

# install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

# add app
COPY . .

EXPOSE 5173

# start app
CMD ["npm", "run", "dev"]
