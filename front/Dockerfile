FROM node:19-alpine AS builder

WORKDIR /opt/app
COPY . .
ENV GATSBY_PROD='true'

RUN npm install
RUN npm run build


FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /opt/app/public .

COPY ./nginx.conf /etc/nginx/

ENTRYPOINT ["nginx", "-g", "daemon off;"]