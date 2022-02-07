FROM node:14
ENV TZ=Europe/Helsinki
WORKDIR /opt/app
COPY festfront/ ./festfront/
COPY festback/ ./festback/
RUN cd festfront && npm install && npm run build && cd ../festback && npm install

EXPOSE 5000

CMD cd festback && npm start