FROM node:current-bullseye-slim

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest ts-node -g

WORKDIR /usr/app

# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3001

# start app
CMD ["yarn", "start"]