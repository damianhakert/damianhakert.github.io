#!/bin/bash
if [ -f /.dockerinit ]; then
    apt-get update -qq
    apt-get install -y nodejs pandoc texlive-xetex
fi
