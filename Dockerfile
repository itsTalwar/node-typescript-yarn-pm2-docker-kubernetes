FROM node:12-alpine
RUN apk add openrc --no-cache
RUN npm install -g pm2@latest 
RUN env HOME=/root/ pm2 install pm2-logrotate
RUN env HOME=/root/ pm2 set pm2-logrotate:retain 30 pm2-logrotate:compress true pm2-logrotate:workerInterval 300
RUN pm2 install typescript
WORKDIR /app
ADD . /app
RUN yarn
# Installing Node Modules and adding it to VOLUME (Meaning it will sit in the image)
VOLUME ["/app"]
CMD ["pm2-runtime", "start",  "pm2-start.json"]
EXPOSE 3009