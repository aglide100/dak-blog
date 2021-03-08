# Docker-compose.yml이 위치한 디렉토리
export DockerService=/root/personel-blog

#!/bin/bash

echo "====> Service Close Docker-compose"
cd $DockerService
docker-compose down --remove-orphans

echo "====> Build Docker-Compose"
cd $DockerService
docker-compose build

echo "====> Starting Docker-Compse daemon"
cd $DockerService
docker-compose up -d
