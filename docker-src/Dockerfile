# docker image build . fcc-express
# docker run -p 8080:8080 fcc-express
# docker tag fcc-express georghoellerrlb/fcc-timestamp-express
# docker push georghoellerrlb/fcc-timestamp-express
FROM node:lts-alpine
WORKDIR /usr/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node","index.js"]