export DockerService=/$USER/dak-blog

#!/bin/bash

echo "====> Service Close Docker-compose"
cd $DockerService
docker-compose down --remove-orphans

echo "====> Remove docker network"
cd $DockerService
echo "yes" | docker network prune

echo "====> Remove unused Conataner"
cd $DockerService
docker image prune -a -f

echo "====> Build Docker-Compose"
cd $DockerService
docker-compose build

echo "====> Starting Docker-Compse daemon"
cd $DockerService
docker-compose up -d
