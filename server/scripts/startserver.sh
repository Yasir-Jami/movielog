#!/bin/bash
server_path="$HOME/server/server.cjs"
env_path="$HOME/server/.env"
dotenv="$HOME/movielog/node_modules/.bin/dotenv"
START="$dotenv -e $env_path -- node $server_path"

# Check if session exists
tmux has-session -t $SERVER_SESSION_NAME 2>/dev/null

if [ $? != 0 ]; then
  echo "tmux session '$SERVER_SESSION_NAME' does not exist. Creating a new one..."
  tmux new-session -d -s $SERVER_SESSION_NAME $START
else
  echo "Restarting express server in tmux session $SERVER_SESSION_NAME..."
  tmux kill-session -t $SERVER_SESSION_NAME
  tmux new-session -d -s $SERVER_SESSION_NAME $START
fi

echo "$SERVER_SESSION_NAME started"