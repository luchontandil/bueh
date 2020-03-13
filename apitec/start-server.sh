#!/bin/bash


# Sanity Checks
if [ ! -x $(which npm) ]; then
    echo " * ERROR : instala npm :  sudo apt install npm"
    exit 1
fi

if [ ! -x $(which node) ]; then
    echo " * ERROR : instala nodeJS :  sudo apt install nodejs"
    exit 1
fi

# Comprobamos que todas las dependencias estan instaladas
npm install

# Modo developer para que lo compile cuando se modifique
nodemon server.js

exit 0
