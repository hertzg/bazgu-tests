#!/bin/bash

set -e

NODES='front session account file captcha'

for node in $NODES;
do

  TARGET_DIR="./${node}-node"
  GITHUB_LNK="https://github.com/bazgu/${node}-node.git"
  if [ ! -d "$TARGET_DIR" ]; then
    git clone $GITHUB_LNK $TARGET_DIR
  else
    _PWD=`pwd`
    cd $TARGET_DIR
    git pull
    cd $_PWD
  fi

  if [[ $node"x" == "captchax" ]]; then
    _PWD=`pwd`
    cd $TARGET_DIR
    npm install canvas
    cd $_PWD
  fi

done;

sed --in-place=.orig s/exports\.host\ =\ \'127.0.0.1\'/exports\.host\ =\ \'0.0.0.0\'/ ./front-node/config.js
