FROM cypress/browsers:node14.17.0-chrome91-ff89

RUN mkdir /my-cypress-project

WORKDIR /my-cypress-project

COPY package.json cypress.json ./

COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npm", "run", "test:run"]

CMD [""]
