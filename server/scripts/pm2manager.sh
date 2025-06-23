#!/bin/bash
# Monolithic script to handle starting, killing, deleting, and checking status of node servers. 
# Will be useful to send commands by SSH

usage() {
  echo "Usage: {start|stop|restart|delete|status|logs} <app_name>"
  exit 1
}

#if [ $# -lt 2 ]; then
#  usage
#fi

COMMAND=$1

# Get app name
if [[ "$2" == "d" ]]; then
   APP_NAME=$DEV_SERVER
elif [[ "$2" == "p" ]]; then
   APP_NAME=$PROD_SERVER
else
   APP_NAME=$2
fi

echo $APP_NAME

case $COMMAND in
  start)
  pm2 start $APP_NAME
  ;;

  startboth)
  pm2 start $DEV_SERVER $PROD_SERVER
  ;;

  stop)
  pm2 stop $APP_NAME
  ;;

  stopboth)
  pm2 stop $DEV_SERVER $PROD_SERVER
  ;;

  restart)
  pm2 restart $APP_NAME
  ;;

  restartboth)
  pm2 restart $DEV_SERVER $PROD_SERVER
  ;;

  delete)
  pm2 delete $APP_NAME
  ;;

  status)
  pm2 status $APP_NAME
  ;;

  logs)
  pm2 logs $APP_NAME
  ;;

  test)
  :
  ;;
  *)
  echo "Error: Invalid command: '$COMMAND'"
  usage
  ;;
esac
