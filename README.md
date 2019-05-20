# spotify-auth-server

Simple Node.js server that implemented Spotify Authorization (through [Client Credentials Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow)). 

`curl -X "POST" <deployed_server_url>` returns json with `access_token`:
```json
{
   "access_token": "NgCXRKc...MzYjw",
   "token_type": "bearer",
   "expires_in": 3600,
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

## Sponsored
<a href="https://lessmess.agency/?utm_source=spotify-auth-server">
  <img src="https://lessmess.agency/badges/sponsored_by_lessmess.svg"
       alt="Sponsored by Lessmess" width="236" height="54">
</a>
