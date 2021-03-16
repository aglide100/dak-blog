# nginx/Dockerfile
FROM ubuntu:18.04

# install nginx & http ext module
RUN apt-get update && apt-get install -y nginx-extras libnginx-mod-http-dav-ext git
# install for htpaswwd / using envsubst in entrypoint.sh 
RUN apt-get install -y apache2-utils && apt-get install -y gettext-base

RUN rm -rf /etc/nginx/sites-enabled/default

COPY nginx.conf /etc/nginx/nginx.conf

RUN  mkdir -p /etc/nginx/conf.d

RUN mkdir -p /etc/nginx/sites-available && mkdir -p /etc/nginx/sites-enabled

COPY proxy.conf.template .

COPY entrypoint.sh .
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

RUN ln -s /etc/nginx/sites-available/proxy.conf /etc/nginx/sites-enabled/proxy.conf

WORKDIR /etc/nginx 
CMD nginx -g "daemon off;"