# spotify-auth-server

Simple Node.js server that implemented Spotify Authorization (through [Client Credentials Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow)). 

`curl -X "POST" <deployed_server_url>` returns json with `access_token`:
```json
{
   "access_token": "NgCXRKc...MzYjw",
   "token_type": "bearer",
   "expires_in": 3600
}
```

## Start localy
```bash
CLIENT_ID=<your Spotify Client Id> CLIENT_SECRET=<your Spotify Client Secret> node local.js
```

## Deploy with [Now](https://zeit.co/now)

Configure secrets:
```bash
now secret add spotify-client-id <your Spotify Client Id>
now secret add spotify-client-secret <your Spotify Client Secret>
```

Deploy
```bash
npm run deploy
```
or
```bash
now
```

## Refresh token support
For scoped authorization without Spotify pop-up `refresh token` can be used.

Configure secret:
```bash
now secret add spotify-refresh-token <your Spotify Refresh Token>
```
or as an environment variable:
```bash
CLIENT_ID=... CLIENT_SECRET=... REFRESH_TOKEN=<your Spotify Refresh Token> node local.js
```
`curl -X "POST" <deployed_server_url>` returns
```json
{
   "access_token": "NgA6ZcYI...ixn8bUQ",
   "token_type": "Bearer",
   "scope": "user-read-private user-read-email",
   "expires_in": 3600
}
```


## Sponsored
<a href="https://lessmess.agency/?utm_source=spotify-auth-server">
  <img src="https://lessmess.agency/badges/sponsored_by_lessmess.svg"
       alt="Sponsored by Lessmess" width="236" height="54">
</a>
