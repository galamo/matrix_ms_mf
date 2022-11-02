from node:14-alpine

USER root

RUN mkdir -p /usr/app/src

WORKDIR /usr/app/src

COPY . /usr/app/src
RUN npm run build

RUN npm -v
RUN node -v
RUN ls

CMD ["npm", "start"]