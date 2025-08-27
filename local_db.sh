#!/bin/bash

function init_and_start_db() {
  if [ ! -d ./local_db ]; then
    initdb -D ./local_db
  fi
  pg_ctl -D ./local_db -l logfile start
}

function stop_db() {
  pg_ctl -D ./local_db stop
}

init_and_start_db
