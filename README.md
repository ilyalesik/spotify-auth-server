# spotify-auth-server

Simple Node.js server that implemented Client Credentials Flow Authorization. 

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
