FROM node:alpine
WORKDIR /usr/src/api

COPY . .

RUN yarn install

EXPOSE 3000
CMD ["yarn", "run", "dev"]
