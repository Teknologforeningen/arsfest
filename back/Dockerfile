FROM node:19-alpine
ENV TZ=Europe/Helsinki

WORKDIR /arsfest

COPY package.json .
RUN npm install

COPY . ./

EXPOSE 5000

CMD npm start
