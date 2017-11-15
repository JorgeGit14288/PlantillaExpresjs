var request = require("request");

function httpRequest() {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'postman-token': '0a279086-a487-3863-4241-181cfbfbdadc',
                'cache-control': 'no-cache'
            }
        };

        request(options, function(error, response, body) {
            if (error) {
                console.log(error);
                reject(error);
            }
            console.log(body);
            resolve(body);
        });
    })
}
module.exports.httpRequest = httpRequest;