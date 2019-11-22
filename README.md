# PrizeOTron

[![Build Status](https://travis-ci.org/dalelotts/prize-o-tron.png?branch=master)](https://travis-ci.org/dalelotts/prize-o-tron)
[![Dependency Status](https://david-dm.org/dalelotts/prize-o-tron.svg)](https://david-dm.org/dalelotts/prize-o-tron)
[![devDependency Status](https://david-dm.org/dalelotts/prize-o-tron/dev-status.png)](https://david-dm.org/dalelotts/prize-o-tron#info=devDependencies)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Live Page](https://prize-o-tron.herokuapp.com/)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Support the project
I know this is a tiny application but many people use it to award meetup prizes (high 5 to all of us) - if you happen to use this app please click the star button (at the top of the page) - it means a lot to all the contributors.

## Project setup

1. Install node
1. Fork this repository (click the `fork` button in the top right of the screen)
1. Clone your fork `git clone https://github.com/[your-user-name]/prize-o-tron`
    - ^^ Note that you must replace **[your-user-name]** with your github user name. 
1. Install project dependencies
   ```
   cd prize-o-tron
   npm install
   npm test
   ```
1. Start the server `npm run-script start:watch` <- This runs the app locally only
1. Visit http://localhost:4200

## Heroku Server

The app runs slightly differently when deployed to Heroku than when running locally. 
To run under the same configuration as Heroku, do the following:

```
cd prize-o-tron
npm install
npm run build
npn start <- runs a local express server on port 4200
```
Navigate to `http://localhost:4200/`. 

**The app will NOT automatically reload if you change any of the source files.**


## Development server
Run `ng serve` or `npm run-script start:watch` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running all tests

Run `npm test` to execute all unit and end-to-end tests.

## Running unit tests

Run `npm run-script test:unit` to execute only the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run-script test:e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
