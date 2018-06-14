FROM ubuntu:18.04
MAINTAINER callmemangel
RUN apt-get update
RUN apt-get install -y nodejs 
RUN apt-get install -y npm 
COPY . /app/
RUN cd app && npm install --no-optional && npm build

RUN echo 'Im done, master' 

EXPOSE 3000
