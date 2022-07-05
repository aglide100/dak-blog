FROM node:16.4-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN apt update && apt install -y wget libvips-dev
RUN apt -y install glib2.0-dev expat gobject-introspection libgtk2.0-doc 
RUN wget https://github.com/libvips/libvips/releases/download/v8.12.2/vips-8.12.2.tar.gz
RUN tar xf vips-8.12.2.tar.gz

RUN cd vips-8.12.2 && ./configure && make && make install && rm -rf vips-8.12.2
RUN npm install --legacy-peer-deps 
# RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"
