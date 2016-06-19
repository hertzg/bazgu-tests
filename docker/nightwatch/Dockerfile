FROM node:latest

USER root

ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME
RUN npm install --ignore-scripts --unsafe-perm --loglevel warn && sync

CMD npm test
