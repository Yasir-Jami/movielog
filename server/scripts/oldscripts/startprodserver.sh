#!/bin/bash
pm2 start ~/server/server.cjs --name "prodserver" -- --port=5000