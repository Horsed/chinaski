chinaski (work in progress)
========

```<img src="localhost:9001/chinaski.gif?any=param" />```

Tracking pixel web app that stores any GET parameter in your MongoDB.

## Installation
    $ npm install chinaski
    $ NODE_ENV=local node chinaski

## Config
Setup an environment specific config file (e.g. ```config/local.js```) with the following content:
  
```js
{
  mongodb: 'mongodb://127.0.0.1:27017/tracking',
  port: '9001'
}
```
