# Matrix



#### Prerequisites 
- [Node.js version 16 installed](https://nodejs.org/en/download/)
- NPM installed (part of Node.js installation) 
- [Docker for desktop installed](https://docs.docker.com/desktop/install/windows-install/)


###### Trying things out
- open command line & run the following commands:
1.  
    ```cmd
    node -v
    ```
    expected result:
    ```cmd
    v16.14.2
    ```
    <br>
2.  
    ```cmd
    npm -v
    ```
    expected result:
    ```cmd
    6.14.17
    ```
    in case you are working with other npm version please run
    ```
    npm install npm@6.14.17 -g
    ```
    <br>
3.   
    ```cmd
    docker -v
    ```
    expected result:
    ```cmd
    Docker version 20.10.7, build f0df350
    ```


## Running Api 
1. `npm run build`
2. `npm start`
3. Open browser & go to `http://localhost:4000/health-check`

## Running all applications
1. `cd dev-apps`
2. `npm install`
3. `npm run all`
 
# Async programing

- Callback
- Promise
- Async Await

### Node Package Manager
 - `npm init`
 - `npm install <pacakge_name>`
 - `npm publish` 

# Docker

## Dockerizing nodejs script
- Create Dockerfile
- Use Some base image from docker hub - nodejs image
- put the following on top of your image `From node:18` - pull the image from docker hub and base my image on the external 
- Run from your command line in the folder `docker build . --tag <image_name>`
- Now we have docker image name - we can run it!
- `docker run <image_name>`
- Container is created 

## Building the consumer
`cd ./apps/app-consumer`
`docker build --progress=plain . -t consumer-ms-1`
## Running the consumer
`docker run consumer-ms-1`

## Consumer + Api
- Running Api as docker
- add health-check request to the api ( from consumer - use HTTP request)

## Dockerizing Nodejs Api
- Use express
- Copy the relevant files
- Run with Port expose `docker run -p <hostPort:dockerPort> <ImageName>`
- Open browser and check the API  /GET localhost:hostPort
- ssh to docker - get inside!
- `docker exec -it DockerContainerId  bash`

- remove container `docker rm -f container_id`
- remove image `docker rmi -f docker_image`


## Docker-compose
- Ability to run few containers
- Orchestration 
- Declare Services
- run `docker-compose up`
- run `docker-compose down`

# Using dev-apps
- MySQL
 1. dev-apps/db/ `docker compose up`
- RabbitMQ

# connect into docker
docker exec -it <container_id> bash

# Workbench
https://www.mysql.com/products/workbench/
https://dev.mysql.com/downloads/workbench/


# New Application
1. Create new application - countries service
2. handlers - getCountries, getStatistics
3. getCountries - return all the countries
4. getStatistics - return the sum of world population ( today 8B )


# React

# Angular


# Unit tests
1. cd libs/countStats
2. run `npm i`
3. run `npm test`

# Client 
## countries-client
 - cd apps/countries-client
 - run `npm i`
 - run `npm run dev`

 ## main-client
 - cd apps/main-client
 - run `npm i`
 - run `npm start`


 ## remote1
 - cd apps/remote1-client
 - run `npm i`
 - run `npm start`

# Integration tests
1. write integration tests for /countries Api
2. assert the response length with 250
 #### EX
 Create the following module: 
 ```js
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  For example
  [1,2,3,4] => [1,3,4] OR [1,4] Valid
  [1,2,3,4] => [1,9,2] OR [4,1] Invalid
 ```
### Async operations - HTTP
- Fetch countries


### Is nodejs is really single threaded?
- crypto lib examples
- fs examples
### Testing
1. Static - Typescript
2. Unit - Testing our lib
3. Integration - Testing few components
4. e2e - Testing a completed scenario including UI in case exist ( out of scope ) 

### Create Unit test to our Library
1. Install mocha & chai
- `npm install mocha chai --save-dev`
2. configure your script command

# EX
1. Write Unit test that asserts functionality to throw error => "Missing Array <ARRAY_NAME>" in case there is missing array
2. Write Unit test which sends 2 arrays and recieve true in case the array is sub sequence 

### Publish - prepublish test

# EX
1. Write an entry point API which serve health check response - "ok"
2. Write an entry point API which serve the countries from our last lesson

# EX - typescript
1. cd to `examples/typescript_ex`
2. run `npm install`
3. run `npm run all`
4. Add some code to `src/index.ts` and see it reflected
### Typescript
#### Configure Typescript

- `npm install -g typescript`
- `npm install ts-node`
- `npm install -g concurrently`
- `npm install nodemon -g`
`    "_run-all": "concurrently -k -p \"[{name}]\" -n \"TypescriptCompiler,application\" -c \"red.bold,yellow.bold,\" \"npm run build_watch\" \"npm run dev\"",

```json

 "devDependencies": {
    "concurrently": "^7.4.0",
    "nodemon": "^2.0.19",
    "typescript": "^4.8.3"
  }

```



### Building our Api - Express
- Open folder api under apps folder
- run `npm init`
- `npm install express` 
- `npm install dotenv`
- Using the fileSystem module
- Writing a middleware
- use VS get
- Https
- Communicating with 3party api
- joi
- logger

### EX
1. Create Entry point which return The the following products from the api
https://dummyjson.com/docs/products

- Validate Middleware
- Https
- Authentication Middleware - JWT - postponed to next session
- Connecting to DB
- Integration test


- Create The following entry point - GET /countries/code?code=isr
- Validate the code contains 3 characters, required and only string
- delegate your request to https://restcountries.com/v3.1/alpha/{code}



- Authentication Middleware - JWT
- Connecting to Database - mysql
- Integration Tests
- compression

```curl
curl --location --request POST 'https://localhost/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userName":"gal",
    "password":"pass1"
}'
```


- compression middleware
- integration test
- Secure node.js - helment
- CSRF middleware
- Dockerizing Node.js app
- RMQ


### EX - write register integration test
- write integration test for register entry point
- see the following curl:

```curl
curl --location --request POST 'https://localhost/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userName":"sadsafadsf@gmail.com",
    "password":"pass1",
    "firstName":"gal",
    "lastName":"amouyal",
    "company":"theCompany"
}'
```

## Docker compose up
Before - make sure to load the sql scripts in your local database.
- install docker 
- go to dev-apps folder and run  `docker-compose up` 


## Microservices
1. Flow and explanation
2. Example - Http
3. Using Message broker



## Running logstash and mapping our logs

docker run -it -v /Users/galamouy/lectures/Artlist_Nodejs/apps/countries-service/logs/log/info.log:/var/log/input.log -v /Users/galamouy/lectures/Artlist_Nodejs/apps/api/logs/log/info.log:/var/log/inputlog2.log --rm --name logstash --net opensearch_opensearch-net opensearchproject/logstash-oss-with-opensearch-output-plugin:7.16.2  -e LS_OPTS="--config.reload.automatic --config.reload.interval 10" -e LS_JAVA_OPTS="-Xms1024m -Xmx1024m" -e 'input {  
    file { 
      path => "/var/log/input.log"
      start_position => "beginning"
    }
    file { 
      path => "/var/log/inputlog2.log"
      start_position => "beginning"
    }    
 }   
  output {
   opensearch {
     hosts => ["http://opensearch-node1:9200"]
     index => "opensearch-logstash-docker-%{+YYYY.MM.dd}"
     ssl => false
     ssl_certificate_verification => false
   }
 }'



