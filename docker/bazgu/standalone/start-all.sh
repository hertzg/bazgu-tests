#!/bin/bash

set -e

NODES='front session account file captcha'
PIDS=''

for node in $NODES;
do
  TARGET_DIR="./${node}-node"
  
  _PWD=`pwd`
  cd $TARGET_DIR
  node server.js &
  PIDS=$PIDS$!" "
  echo "Started $! - ${node}-node"
  cd $_PWD
done;

sleep 1
netstat -ntlp
echo "Ready: ${PIDS}"
wait
