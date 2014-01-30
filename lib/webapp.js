var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , MongoClient = require('mongodb').MongoClient;


/**
 * Expose module.
 */
module.exports = function() { return new ChinaskiServer(); }


/**
 * Constructor.
 */
function ChinaskiServer() {
  // load config
  this.mongoconf = 'mongodb://127.0.0.1:27017/chinaski';
}


/**
 * Start HTTP server.
 */
ChinaskiServer.prototype.start = function(port) {
  var self = this;

  MongoClient.connect(this.mongoconf, function(err, db) {
    if(err) throw err;

    http.createServer(function(req, res) {

      try {
       self[req.method](db, req, res);
      } catch(e) {
        res.statusCode = 500;
      }

    }).listen(port || 3000);
  });
}


/**
 * Handle POST request.
 */
ChinaskiServer.prototype.GET = function(db, req, res) {
  var uri = url.parse(req.url, true)
    , path = uri.pathname.split('/')[1]
    , query = uri.query;


  if(path == 'chinaski.gif') {
     var img = fs.readFileSync('./chinaski.gif');
     res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');

    var collection = db.collection('tracking-data');
    collection.insert(query, function(err, docs) {
      if(err) throw err;
    });
    console.log('[INFO] Saved data ' + JSON.stringify(query));
  }
}