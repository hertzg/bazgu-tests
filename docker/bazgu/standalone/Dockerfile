FROM node:6
MAINTAINER George Kotchlamazashvili <georgedot@gmail.com>

ENV DEBIAN_FRONTEND noninteractive

RUN sed --in-place=.orig s/httpredir\.debian\.org/debian.grena.ge/ /etc/apt/sources.list

RUN apt-get update \
  && apt-get install --no-install-recommends -y \
    git \
    curl \
    wget \
    ssh-client \
    ca-certificates \
    net-tools

RUN apt-get install --no-install-recommends -y \
    libcairo2-dev \
    libjpeg-dev \
    libpango1.0-dev \
    libgif-dev \
    build-essential \
    g++

ADD ./build.sh .
RUN sync && ./build.sh

# Cleanup
RUN apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 7100

ADD ./start-all.sh .
CMD sync && ./start-all.sh
