from node:14-alpine
USER root
RUN mkdir -p /usr/app/src
WORKDIR /usr/app/src
COPY . /usr/app/src
RUN npm run build
EXPOSE 4000
# When running the container
CMD ["npm", "start"] 