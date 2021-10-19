# dak-blog

### This repo is make simple web blog

## 1. purpose

made own blog with typescript and golang



## 2. How to run?

> ### Using docker

    docker-compose build

    docker-compose up -d


OR

just command

running webapp

Move the ui directory and

    cd ui/

> ### run storybook on your local

    npm run storybook

> ### run next js on your local

    npm run dev

> ### run npm build

    npm run build
 
 running api server
 
> ### go run
    go run cmd/**/*.go
    
    

## 3. Project Diagram

wip

github => github action CI/CD => dockerized app => deploy server

## 4. Dependency

This project used

Github CI/CD

> [cross-the-world/ssh-scp-ssh-pipelines][cross-the-world/ssh-scp-ssh-pipelineslink]

> [JamesIves/github-pages-deploy-action][jamesives/github-pages-deploy-actionlinklink]

CSS

> [tailwindCss][tailwindcsslink]

SSR framework

> [nextJs][nextjslink]

Script language

> [typescript][typescriptlink]

API Server

> [golang][golanglink]

gRPC-web

> [gprc-web][grpcweblink]

UI develop testing tool

> [stoybook][storybooklink]

LoadBalance

> [nginx][nginxlink]

Database

> [postgresql][postgesqllink]

Container

> [docker][dockerlink]

---

## 5. preview

storybook

> https://aglide100.github.io/dak-blog/

vercel app

> http://dak-blog-git-master.aglide100.vercel.app

[cross-the-world/ssh-scp-ssh-pipelineslink]: https://github.com/cross-the-world/ssh-scp-ssh-pipelines
[jamesives/github-pages-deploy-actionlinklink]: https://github.com/JamesIves/github-pages-deploy-action
[tailwindcsslink]: https://tailwindcss.com/
[typescriptlink]: https://www.typescriptlang.org/
[nextjslink]: https://nextjs.org/
[golanglink]: https://golang.org/
[storybooklink]: https://storybook.js.org/
[postgesqllink]: https://www.postgresql.org/
[dockerlink]: https://www.docker.com/
[nginxlink]: https://www.nginx.com/
[grpcweblink]: https://github.com/improbable-eng/grpc-web
