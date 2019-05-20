const fetch = require('node-fetch');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const refreshToken = process.env.REFRESH_TOKEN;

const encodedClientCredentials = (new Buffer(clientId + ":" + clientSecret)).toString('base64');

const postOptions = {
    method: "post",
    body: refreshToken ? ("grant_type=refresh_token&refresh_token=" + refreshToken) : "grant_type=client_credentials",
    headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + encodedClientCredentials
    }
}

const responseHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Type": "application/json; charset=utf-8"
}

module.exports = (req, res) => {
    fetch(`https://accounts.spotify.com/api/token`, postOptions)
        .then(response => {
            if (!response.ok) {
                res.writeHead(500, responseHeaders);
                res.end(JSON.stringify({
                    error: response.statusText
                }));
                throw Error(response.statusText);
            }
            return response.text()
        })
        .then(json => {
            res.writeHead(200, responseHeaders);
            res.end(json)
        });
}
