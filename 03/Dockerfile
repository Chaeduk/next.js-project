FROM node:latest as builder

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install -g

CMD ["yarn","dev"]