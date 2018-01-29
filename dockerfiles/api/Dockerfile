# Node 6.12.3 for now
FROM node:6.12.3

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.3.2
ENV PATH="/root/.yarn/bin:${PATH}"
RUN yarn global add loopback-cli && yarn global add nodemon

WORKDIR /usr/src/api
