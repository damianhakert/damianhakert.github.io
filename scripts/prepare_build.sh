#!/bin/bash
if [ -f /.dockerinit ]; then
    apt-get update -qq
    apt-get install -y -qq nodejs
fi
