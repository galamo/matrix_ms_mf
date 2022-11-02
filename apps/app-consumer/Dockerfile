from node:14-alpine
USER root

RUN mkdir -p /usr/app/src

WORKDIR /usr/app/src

COPY . /usr/app/src
RUN echo '=============== Before building the application ==============='
RUN ls
RUN npm run build

RUN npm -v

RUN node -v
RUN echo '=============== After building the application ==============='
RUN ls

# When running the container
CMD ["npm", "start"] 