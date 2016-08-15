var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var cors = require('cors');

var FB = require('fb');
FB.setAccessToken('523889191141898%7CEzjacE2IdM6MdNH9N8m9WSWs3GQ')

var app = express();
app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/photos', function (req, res) {
    FB.api(
        "/499635510055878/photos",
        'GET',
        {fields : 'images',
         limit : 40},
        function (response) {
            if (response && !response.error) {
                var result = [];
                for (i = 0; i < response.data.length; i++) {
                    result.push({image: response.data[i].images[2].source});
                }
                shuffle(result);
                res.send(result)
            }
        }
    );
})

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


