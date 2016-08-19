var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var cors = require('cors');

var facebook = require('./photos/facebook.js');

var app = express();
app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

var facebookToken = '523889191141898%7CEzjacE2IdM6MdNH9N8m9WSWs3GQ';
var facebookPhotos = facebook.download(facebookToken,  {fields : 'images', limit : 5});

app.get('/photos', function (req, res) {
  facebookPhotos.then(function (photos) {
    shuffle(photos);
    res.send(photos)
  });
});

var port = process.env.PORT || 3001;
console.log('Server started on port ' + port);

app.listen(port);

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
