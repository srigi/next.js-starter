# Next.js starter

[Next.js](https://nextjs.org/) skeleton written in Typescript. Using  [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss) for styling.


### Requirements
- Node.js 12+
- `yarn`


### Preparation
- clone repository into local project folder


### Development
- run `yarn dev`
- make changes to the code
- check the code before pushing to the repository: `yarn lt`


### Deployment (Dokku)
- copy file `.dokku/.env [example]` into `.dokku/.env`
- change value of `DOKKU_HOST` in `.dokku/.env`
- run `./.dokku/00_init.sh` to bootstrap deployment in you Dokku server
- run `./.dokku/99_deploy.sh` to deploy to the Dokku server

After fist deployment it is not needed to run `./.dokku/99_deploy.sh` to deploy an app again. Simply `git push dokku master` to redeploy.
