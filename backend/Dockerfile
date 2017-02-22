FROM node:argon

RUN mkdir -p /app/photos
WORKDIR /app

COPY package.json /app/
COPY dashboard.js /app/
COPY photos/facebook.js /app/photos/

RUN npm install

EXPOSE 3003
ENTRYPOINT [ "node", "dashboard.js" ]
