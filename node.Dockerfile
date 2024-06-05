FROM node:lts-alpine

COPY /app .
# CMD [ "npm run build" ]

RUN npm install
RUN npm run build