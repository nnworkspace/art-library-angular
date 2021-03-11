# Angular Frontend of the App Artwork Library of Alpha Org 

This is the Angular frontend for the App *Artwork Library of Alpha Org*.

## Prerequisites for building this project

1. Install tools: nodejs, npm, and angular cli.

1. Install OpenAPI Generator for npm
    ```shell
    npm install @openapitools/openapi-generator-cli -g
    openapi-generator-cli version
    ```
   
1. Clone the [art-library-api Repository](https://github.com/nnworkspace/art-library-api) to your
   local computer. Path of the API project must be this project's *sibling*.
   If the path is wrong, the build script of this project won't work. Relevant code in `package.json`,
   pay attention to the input path:
   ```json
   "gen:api:inventory": "openapi-generator-cli generate -g typescript-angular -i ../art-library-api/art-library-inventory-api.yml -o ./src/gen/inventory",
    "gen:api:lending": "openapi-generator-cli generate -g typescript-angular -i ../art-library-api/art-library-lending-api.yml -o ./src/gen/lending",
    "prestart": "npm run gen:api:inventory && npm run gen:api:lending",
    "start": "ng serve",
    "prebuild": "npm run gen:api:inventory && npm run gen:api:lending",
   ```

1. Install an API mock server of your choice. I recommend the [Stoplight Prism mock server](https://github.com/stoplightio/prism). Go through the installation instruction [here](https://github.com/stoplightio/prism).

1. The real backend server can be cloned from [art-library-express Repository](https://github.com/nnworkspace/art-library-express) to your
   local computer. Path of the API project should be this project's *sibling*. Refer to the `README.md` of the backend to run the express server.

1. Run the backend API server for development or test. It can be a real server or a mock server. I use prism mock server during the development.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server
   
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



