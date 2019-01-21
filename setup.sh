#!/usr/bin/env bash

printf "Installing ReactJS dependencies:"
npm install

printf "Installing Flask dependencies:"
pip install -r requirements.txt
