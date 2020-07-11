FROM node:12.14.0-alpine3.11
ENV NODE_ENV development
LABEL com.datadoghq.ad.logs='[{"source": "nuxt", "service": "nuxt"}]'

LABEL maintainer="vsevolod_skripnik@protonmail.com"

RUN apk update && \
  apk --no-cache add dumb-init && \
  apk --no-cache add autoconf automake gcc libc-dev make

WORKDIR /srv

ADD server/healthcheck.js /

ADD package.json /srv
ADD package-lock.json /srv
RUN npm install

ADD . /srv

WORKDIR /srv
RUN npm run build && find .nuxt/dist/client -type f -name '*.js.map' -delete


ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD npm start
