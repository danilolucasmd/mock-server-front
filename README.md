# MOCK SERVER - FRONT-END WEB APPLICATION 

You can create a fake Restfull API of your mocks to improve your front-end development using only JSON.

Take a look on our [Back-end Application to manage your mocks!](https://github.com/juanpinheiro/mock-server)

This application fully supports the [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Deploying to Heroku
- Implement the [Back-end Application to manage your mocks](https://github.com/juanpinheiro/mock-server)
- Access `/mock-server-front/src/constants/index.js`. Edit the file and change the URI of your [mock-server](https://github.com/juanpinheiro/mock-server):
  ```javascript
  export const api = 'https://your-url.com/mock-server' // just change it to your URI;
  ```

We gonna use  [Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
You must have [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ heroku create # or heroku create project-name
$ git push heroku master
$ heroku open
```

### Running Locally

You must have the following applications installed:
- [Node.js](https://nodejs.org/en/download/).
- [MongoDB](https://docs.mongodb.com/manual/installation/).


```sh
$ git clone https://github.com/daniloluca/mock-server-front # or clone your own fork
$ cd mock-server-front
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

### Have fun!
