FROM node:lts-hydrogen

RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000
