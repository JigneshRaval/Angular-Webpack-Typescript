#### Angular 4 with Webpack and Typescript: Basic Setup Guide ( No system.js )

First install Node.js and NPM or Yarn

Create project folder. Here I have created `Angular-Webpack-Typescript`

Open command prompt and go inside that folder using `CD` command

Create `package.json` file in this project folder

Install and save Angular Modules and all it's dependancies using following NPM command

    npm install @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router core-js reflect-metadata rxjs zone.js --save

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
    },

If you are using facebook yarn instead of NPM then your can run following command to install Angular and it's dependancies

    yarn add @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router core-js reflect-metadata rxjs zone.js

Now install following minimum Development dependancies. You can install more packages when needed like Jasmin, Karma for testing, Other webpack modules for SCSS, images and CSS, Types for typescript, webpack-dev-server for Development server etc. As we are not creating complex project so we are not installing many packages.

    "devDependencies": {
    	"awesome-typescript-loader": "^3.1.3",
    	"typescript": "^2.3.3",
    	"webpack": "^2.6.1"
    }

Now add `script` section to add some commands

    "scripts": {
    	"start": "webpack -w",
    	"start:prod": "webpack -p"
    },

Now create tsconfig.json file

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

Create one `webpack.config.js` file which will guide webpack how to load awesome-typescript-loader to compile .ts files

We will create following JS files to run angular js in the browser

**main.ts** - this is the entry point of the application which bootstraps whole application. index.html will load this file first

**polyfills.ts** - this file consists imports of ES6 and ES7 polyfills. This file is the entry point to generate final polyfills.js

**vendor.ts** - this file consists imports of RXJS and Angular libraries. This file is the entry point to generate vendor.js

### Referances/Tutorials

*   [Angular 2 Project Setup With Webpack For Development And Production](http://blog.sodhanalibrary.com/2016/10/angular2-project-setup-with-webpack-for.html#.WS0hg-uGOUl)
*   [Angular 2 with Webpack](http://www.dotnetcurry.com/angularjs/1320/using-webpack-bundling-with-angular-2)
*   [Optimize your Angular 2 Application with Tree Shaking](http://blog.rangle.io/optimize-your-angular2-application-with-tree-shaking/)