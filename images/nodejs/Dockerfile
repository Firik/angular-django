FROM alpine:latest

ENV NODE_VERSION=v6.10.0 NPM_VERSION=3

RUN apk upgrade --update && \
    apk add --update wget unzip bash git curl make gcc g++ python linux-headers libgcc libstdc++ && \
    curl -sSL https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}.tar.gz | tar -xz && \
    cd /node-${NODE_VERSION} && \
    ./configure --prefix=/usr --without-snapshot && \
    make -j$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
    make install && \
    cd / && \
    npm install -g npm@${NPM_VERSION} && \
    apk del gcc g++ linux-headers && \
    rm -rf /etc/ssl /node-${NODE_VERSION} /usr/include \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

RUN adduser -D -u 1000 firik -h /home/firik
USER firik
RUN mkdir /home/firik/app
WORKDIR /home/firik/app
RUN wget --no-check-certificate https://github.com/angular/quickstart/archive/master.zip
RUN unzip master.zip
VOLUME ["/home/firik/app"]

ENTRYPOINT ["bash"]

EXPOSE 4200