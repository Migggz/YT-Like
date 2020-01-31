### How it Works?

If you visit the repo's [website](https://yt-like.magedmohammed.me) you will notice that I am already uses an Environment Variable which holds API Token for Youtube V3 API.

If you want to run the project locally

1. create in root folder `/` file called `.env.development.local`
2. which holds
   `REACT_APP_TOKEN=YOUR_API_TOKEN`
3. `cmd> yarn && yarn start`

you can generate an API Key from [there](<[https://link](https://console.developers.google.com/apis/library?q=Youtube%20v3)>)

To build for production use
`cmd> yarn build`
