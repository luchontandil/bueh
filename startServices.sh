mongod || id=$(ps -A | grep [m]ongod | awk '{print $1}'); kill -9 $id; mongod --repair; mongod &
cd tec
Atom .
vue ui &
cd ..
cd apitec
Code .
sh start-server.sh 
