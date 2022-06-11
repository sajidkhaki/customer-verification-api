FROM node:16.13.2-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && rm -rf /tmp/* /var/tmp/*

COPY . .

RUN npm run build

FROM node:16.13.2-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod --ignore-scripts && rm -rf /tmp/* /var/tmp/*

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
