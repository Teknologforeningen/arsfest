
FROM node:19-alpine AS gatsby-builder

WORKDIR /arsfest
ENV GATSBY_PROD='true'

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

# CMD [ "gatsby", "build" ]


FROM nginx:alpine as server

COPY base_nginx.conf /etc/nginx/nginx.conf
COPY api_nginx.conf /etc/nginx/api_nginx.conf
COPY --from=gatsby-builder /arsfest/public /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]