#!/bin/bash

docker-compose rm -f
docker-compose up --build -d
docker-compose run nightwatch npm test
docker-compose stop
