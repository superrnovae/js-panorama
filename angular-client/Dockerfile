# pull official base image
FROM node:current-bullseye-slim

RUN npm i npm@latest @angular/cli -g

WORKDIR /

RUN ng new app \
    && cd app \
    && ng serve --host 0.0.0.0 --port 4200

# start app
CMD ["npm", "run", "dev"]
