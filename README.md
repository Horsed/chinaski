chinaski (work in progress) [![Build Status](https://secure.travis-ci.org/Horsed/chinaski.png)](http://travis-ci.org/Horsed/chinaski) [![unstable](http://hughsk.github.io/stability-badges/dist/unstable.svg)](http://github.com/hughsk/stability-badges)
========

```<img src="localhost:9001/chinaski.gif?any=param" />```

Tracking pixel web app that stores any GET parameter in your MongoDB.

## Installation
    $ npm install -g chinaski
    $ NODE_ENV=local chinaski

## Config
Setup an environment specific config file (e.g. ```config/local.js```) with the following content:
  
```js
{
  mongodb: 'mongodb://127.0.0.1:27017/tracking',
  port: '9001'
}
```
