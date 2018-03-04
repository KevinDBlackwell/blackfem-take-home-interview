# BlackFem Take Home Interview - My Links

## Ruby and Rails version
This sample app has been run and tested with Ruby version 2.5.0 and Rails 5.1.5.

## Installing
It is recommended that you install using [RVM](https://rvm.io) or [rbenv](https://github.com/rbenv/rbenv).

You will need the [Yarn package manager](https://yarnpkg.com/en/).

```
cd blackfem-take-home-interview
gem install bundler --no-rdoc --no-ri
bundle install
yarn install
```

## Running the web server
The web server is the normal Rails development server:

`rails s`

You will also need to run the webpack dev server at the same time in another window to compile and run the Angular app.

`./bin/webpack-dev-server`

## Initializing the database
The Rails app is configured to use PostgreSQL as its database. Assuming you have PostgreSQL installed on your system and it is running, you should be able to create the database with:

`rake db:create`

And populate it with

`rake db:migrate`
