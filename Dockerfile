From node:19.4

ENV MONGODB_DEV_URI="mongodb://root:password@mongodb/mongoose_dev" \
    MONGODB_TEST_URI="" \
    MONGODB_URI="" 

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node","app.js"]
