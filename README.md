# simple-angular-webpack-boilerplate

Simplest Angular, SASS and Webpack boilerplate.

This seed repository is very simple, and have just enough to get you started. This seed is made for small Angular applications and prototypes and does not have any tests, do not use it for applications which may be maintained by a lot of people and for a long time, in that case the best option is to use some other boilerplate or to write one from scratch.

### Quick start

```bash
# clone boilerplate
$ git clone https://github.com/cytrox/simple-angular-webpack-boilerplate.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the webpack dev server
$ npm run dev
```
go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Developing](#developing)
    * [Production](#production)
* [Frequently asked questions](#faq)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this boilerplate:
* `node`
* `npm`

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Developing

After you have installed all dependencies you can now start developing with:

* `npm run dev`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8080`.

And you are all set! You can now modify your components on the fly without having to reload the entire page.

## Production

To build your application, run:

* `npm run build`

You can now go to `/build` and deploy that to your server!

# FAQ

#### Do I need to add script / link tags into index.html ?

No, Webpack will add all the needed Javascript bundles as script tags and all the CSS files as link tags. The advantage is that you don't need to modify the index.html every time you build your solution.

#### How to include external js and angular libraries ?

It's simple, just install the lib via npm and import it in your code when you need it. The best option is to import it in src/js/app.js.

#### How to include external css files such as bootstrap.css ?

Just install the lib and import the css files in src/js/app.js. For example this is how to do it with bootstrap:

```sh
npm install bootstrap@next --save
```

And in src/js/app.js add the following:

```js
// styles
// some other styles...
// another style...
import 'bootstrap/dist/css/bootstrap.css';
```

# License

[Unlicense](/LICENSE)
