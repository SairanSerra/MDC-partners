FROM node:16.19-alpine

WORKDIR /app/mdc-partners

COPY package*.json .

RUN npm install

ENV CHOKIDAR_USEPOLLING=true
COPY . .

# RUN node ace swagger:generate

CMD node ace serve --watch