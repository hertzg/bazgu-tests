FROM debian:jessie
MAINTAINER George Kotchlamazashvili <georgedot@gmail.com>

ENV DEBIAN_FRONTEND noninteractive

RUN sed --in-place=.orig s/httpredir\.debian\.org/debian.grena.ge/ /etc/apt/sources.list

RUN apt-get update \
  && apt-get install --no-install-recommends -y \
    git \
    curl \
    wget

# Cleanup
RUN apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
