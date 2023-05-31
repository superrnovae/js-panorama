# pull official base image
FROM node:current-bullseye-slim

RUN npm i npm@latest @angular/cli -g

WORKDIR /app

COPY entrypoint.sh ./

RUN chmod +x entrypoint.sh
RUN ng new app --skip-git --directory ./

VOLUME /app

# start app
ENTRYPOINT ["/app/entrypoint.sh"]
