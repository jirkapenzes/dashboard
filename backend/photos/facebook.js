var FB = require('fb');
var Promise = require('promise');

module.exports = {
  download: function(token, options) {
    var FB = require('fb');

    return new Promise(function(fullfil, reject) {
      FB.setAccessToken(token)
      FB.api(
          "/499635510055878/photos",
          'GET', options,
          function (response) {
              var result = [];
              if (response && !response.error) {
                  for (i = 0; i < response.data.length; i++) {
                      result.push({image: response.data[i].images[2].source});
                  }
                  fullfil(result);
              }
              reject(result);
          }
      );
    });

  }
};
