# Angular 4 with Webpack and Typescript: Basic Setup Guide ( No system.js )

First install Node.js and NPM or Yarn

Create project folder. Here I have created `Angular-Webpack-Typescript`

## Folder Structure

```
├── package.json

├── deps // Dependancy container folder
│   ├── polyfills.ts
│   └── stdpkgs.ts // or vendor.ts

├── src
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── home
│   │       ├── home.component.html
│   │       └── home.component.ts
│   |── main.ts
|   └── index.html

├── server.js
├── tsconfig.json
└── webpack.config.js
```

Open command prompt and go inside that folder using `CD` command

Create `package.json` file in this project folder

### Installation

Install and save Angular Modules and all it's dependancies using following NPM command

```
npm install @angular/core @angular/common @angular/compiler @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router core-js reflect-metadata rxjs zone.js --save
```

Install typescript, webpack and other dependencies.

```
npm install typescript webpack @angular/compiler-cli awesome-typescript-loader --save-dev
```

```
"dependencies": {
    "@angular/common": "^4.1.3",
    "@angular/compiler": "^4.1.3",
    "@angular/core": "^4.1.3",
    "@angular/forms": "^4.1.3",
    "@angular/http": "^4.1.3",
    "@angular/platform-browser": "^4.1.3",
    "@angular/platform-browser-dynamic": "^4.1.3",
    "@angular/router": "^4.1.3",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.10",
    "rxjs": "^5.4.0",
    "zone.js": "^0.8.11"
}
```

If you are using facebook yarn instead of NPM then your can run following command to install Angular and it's dependancies

```
yarn add @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router core-js reflect-metadata rxjs zone.js
```

Now install following minimum Development dependancies. You can install more packages when needed like Jasmin, Karma for testing, Other webpack modules for SCSS, images and CSS, Types for typescript, webpack-dev-server for Development server etc. As we are not creating complex project so we are not installing many packages.

```
"devDependencies": {
    "awesome-typescript-loader": "^3.1.3",
    "typescript": "^2.3.3",
    "webpack": "^2.6.1"
}
```

Now add `script` section in `package.json` to add some commands

```
"scripts": {
    "start": "webpack -w",
    "start:prod": "webpack -p"
},
```

Now create tsconfig.json file

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "es2015",
        "outDir": "./dist/",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": true,
        "lib": [
            "es2015",
            "dom"
        ]
    },
    "exclude": [
        "node_modules"
    ],
    "compileOnSave": false,
    "buildOnSave": false
}
```

Create one `webpack.config.js` file which will guide webpack how to load awesome-typescript-loader to compile .ts files

```
// webpack.config.js
//--------------------------------------

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'libs': './deps/vendor.ts', // Libs or Vendor files like jQuery, Lodash, Bootstrap etc. including Angular and RxJS
        'polyfills': './deps/polyfills.ts' // Polyfills like Core.js, Zone.js
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        publicPath: "/assets/", // the url to the output directory resolved relative to the HTML page
        libraryTarget: "umd", // universal module definition
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'libs', 'polyfills']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader'],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'source-map'
};
```

We will create following JS files to run angular js in the browser

**main.ts** - this is the entry point of the application which bootstraps whole application. index.html will load this file first

**polyfills.ts** - this file consists imports of ES6 and ES7 polyfills. This file is the entry point to generate final polyfills.js

**vendor.ts** - this file consists imports of RXJS and Angular libraries. This file is the entry point to generate vendor.js

Create folder `./src/` and create following files.

```
// ./src/main.ts
//----------------------------

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

```
// ./src/app/app.module.ts
//----------------------------

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```

```
// ./src/app/app.component.ts
//----------------------------

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>Hello Angular 4</div>`,
    styleUrls: []
})
export class AppComponent { }

```

```
// ./src/index.html
//----------------------------

<!DOCTYPE html>
<html>

<head>
    <base href="/">
    <title>Angular With Webpack and Typescript</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <my-app>Loading...</my-app>

    <script src="../../dist/polyfills.js"></script>
    <script src="../../dist/libs.js"></script>
    <script src="../../dist/app.js"></script>
</body>

</html>
```

## Polyfills and Vendor Libraries ( see webpack.config.js to import following files and will compile it to dist folder )

Following two files will help webpack to import Angular 2/4 Modules and other dependancies like core-js, zone.js, RxJS.

Webpack will compile following files into .js files which you need to include in index.html as shown in previous code.

```
// ./deps/polyfills.ts
//----------------------------

/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/**
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.
import 'zone.js/dist/long-stack-trace-zone';
```


```
// ./deps/vendor.ts
//----------------------------

// Angular
import '@angular/core';
import '@angular/common';
import '@angular/compiler';
import '@angular/forms';
import '@angular/http';
import '@angular/router';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';

// RxJS
import 'rxjs';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
```

## Referances/Tutorials

*   [Angular 2 Project Setup With Webpack For Development And Production](http://blog.sodhanalibrary.com/2016/10/angular2-project-setup-with-webpack-for.html#.WS0hg-uGOUl)
*   [Angular 2 with Webpack](http://www.dotnetcurry.com/angularjs/1320/using-webpack-bundling-with-angular-2)
*   [Optimize your Angular 2 Application with Tree Shaking](http://blog.rangle.io/optimize-your-angular2-application-with-tree-shaking/)
*   [Setting Up Angular 2 with Webpack](https://semaphoreci.com/community/tutorials/setting-up-angular-2-with-webpack)
