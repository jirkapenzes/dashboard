FROM node:argon


RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
COPY dashboard.js /app/

RUN npm install

EXPOSE 3001
ENTRYPOINT [ "node", "dashboard.js" ]
