# syntax=docker/dockerfile:1
FROM node:14.18.0-alpine

WORKDIR /home/node/app
RUN mkdir -p node_modules && chown -R node:node .
COPY --chown=node:node package*.json yarn.lock ./
USER node
RUN yarn --pure-lockfile
COPY --chown=node:node . .
EXPOSE 8080
CMD ["node", "app.js"]
