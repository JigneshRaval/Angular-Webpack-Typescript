Referance : https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/linked-library.md

# Linked libraries using Angular 4, Typescript and Webpack 2

While working on a library, it is common to use [npm link](https://docs.npmjs.com/cli/link) to
avoid reinstalling the library on every build.

# How to link and unlink library

to link any external Angular module into another module for live development we can use `npm link` command.

# Process

for example we have two applications
1) MyModule-A
2) MyModule-B ( Main App )

If I want to link MyModule-A inside MyModule-B, the first fo inside MyModule-A folder and run command : `npm link`
this will link your module A, to global npm directory `C:\Users\<yourname>\AppData\Roaming\npm\node_modules\

then go inside Module B in which you want to use your linked module, and run open command prompt from that directory and run `npm link MyModule-A`

Now you are able to use all the functions/code of Module A, inside Module B.

# Module-A

```
// package.json

{
	"name": "npm-link-test",
	"version": "2.0.1",
	"scripts": {
		"tsc": "tsc",
		"tsc:w": "tsc -w",
		"ngc": "ngc -p tsconfig-build.json"
	},
	"dependencies": {},
	"devDependencies": {
		"@angular/common": ">=2.0.0",
		"@angular/compiler": ">=2.0.0",
		"@angular/compiler-cli": ">=2.0.0",
		"@angular/core": ">=2.0.0",
		"@angular/platform-browser": ">=2.0.0",
		"@angular/platform-browser-dynamic": ">=2.0.0",
		"@types/core-js": "^0.9.42",
		"@types/node": "^8.0.6",
		"core-js": "2.4.1",
		"reflect-metadata": "0.1.10",
		"rxjs": "5.2.0",
		"typescript": "2.2.2",
		"zone.js": "0.8.5"
	},
	"peerDependencies": {
		"@angular/core": ">= 2.0.0 < 5"
	},
	"typings": "index.d.ts",
	"main": "index.js"
}
```

```
// tsconfig.json

{
	"compilerOptions": {
		"target": "es5",
		"module": "es2015",
		"moduleResolution": "node",
		"declaration": true, // triggers the generation of the typings *.d.ts files, that enable IDE Intellisense
		"sourceMap": true,
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true,
		"removeComments": false,
		"noImplicitAny": true,
		"baseUrl": ".", // This must be specified if "paths" is.
		"lib": [
			"es2015",
			"dom"
		]
	},
	"include": [
		"src/**/*.ts"
	],
	"exclude": [
		"node_modules"
	],
	"files": [
		"index.ts"
	],
	"typeRoots": [
		"../node_modules/@types"
	],
	"compileOnSave": false,
	"buildOnSave": false
}
```

```
// tsconfig-build.json

{
	"compilerOptions": {
	    "module": "es2015",
		"moduleResolution": "node",
		"target": "es5",
		"stripInternal": true,
		"sourceMap": true,
		"inlineSources": true,
		"declaration": true,
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true,
		"removeComments": false,
		"skipLibCheck": true
	},
	"files": [
		"index.ts"
	],
	"typeRoots": [
		"../node_modules/@types"
	],
	"angularCompilerOptions": {
		"skipMetadataEmit": false,
		"skipTemplateCodegen": true
	}
}
```

# Module-B

```
// package.json

{
  "name": "angular4_webpack_typescript",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "webpack -w",
    "start:prod": "webpack -p"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@angular/common": "^4.1.3",
    "@angular/compiler": "^4.1.3",
    "@angular/core": "^4.1.3",
    "@angular/forms": "^4.1.3",
    "@angular/http": "^4.1.3",
    "@angular/platform-browser": "^4.1.3",
    "@angular/platform-browser-dynamic": "^4.1.3",
    "@angular/router": "^4.1.3",
    "copy-webpack-plugin": "^4.0.1",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.10",
    "rxjs": "^5.4.0",
    "zone.js": "^0.8.11"
  },
  "devDependencies": {
    "@angular/compiler-cli": "^4.1.3",
    "awesome-typescript-loader": "^3.1.3",
    "css-loader": "^0.28.4",
    "style-loader": "^0.18.2",
    "typescript": "2.2.0",
    "webpack": "^2.6.1"
  },
  "module": "main"
}
```

```
// tsconfig.json

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
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ],
  "compileOnSave": false,
  "buildOnSave": false
}
```

```
// webpack.config.js

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'libs': './deps/vendor.ts', // Libs or Vendor files like jQuery, Lodash, Bootstrap etc. including Angular and RxJS
        'polyfills': './deps/polyfills.ts' // Polyfills like Core.js, Zone.js
    },
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: '[name].js', // string
        publicPath: "/", // string
        libraryTarget: "umd", // universal module definition
    },
    // require those dependencies but don't bundle them
    //externals: [/^\@angular\//, /^rxjs\//],

    resolve: {
        extensions: ['.js', '.ts', '.css'],
        // This will resolve module path when using "npm link"
        alias: { "@angular": path.join(__dirname, "node_modules/@angular") }
    },
    resolveLoader: {
        modules: ["node_modules"] // This will resolve module path when using "npm link"
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
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
};
```

As webpack 2 doesn't load linked module properly so for that we need to mention following lines in `webpack.config.js` file

```
resolve: {
    // This will resolve module path when using "npm link"
    alias: { "@angular": path.join(__dirname, "node_modules/@angular") }
},
resolveLoader: {
    modules: ["node_modules"] // This will resolve module path when using "npm link"
}
```

Above code will fix module resolving issue in linked module.

Thanks