const fetch = require('node-fetch');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const encodedClientCredentials = (new Buffer(clientId + ":" + clientSecret)).toString('base64');

const postOptions = {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + encodedClientCredentials
    }
}

module.exports = (req, res) => {
    fetch(`https://accounts.spotify.com/api/token`, postOptions)
        .then(response => {
            if (!response.ok) {
                res.writeHead(500);
                res.end(JSON.stringify({
                    error: response.statusText
                }));
                throw Error(response.statusText);
            }
            return response.text()
        })
        .then(json => {
            res.writeHead(200, { 'Content-Type': "application/json; charset=utf-8" });
            res.end(json)
        });
}
