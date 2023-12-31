FROM node:16-alpine3.15 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --glob rimraf

RUN yarn --only=development

COPY . .

RUN yarn run build

FROM node:16-alpine3.15 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]