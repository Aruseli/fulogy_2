# react-web-app

- [x] draft of auth
- [x] hasura gql ssr and live query
- [x] image responsive
- [x] mui ssr

## env or .env

```sh
# always
HASURA_GQL_SSL=0 # 1 for production with ssl
HASURA_GQL_SECRET='myadminsecretkey'
HASURA_GQL_PATH='localhost:8080/v1/graphql'

PORT=3000
# auth
AUTH_GOOGLE_CLIENT_ID="<id>"
AUTH_GOOGLE_CLIENT_SECRET="<secret>"
AUTH_GOOGLE_CALLBACK="https://<repo>.herokuapp.com/api/auth/google/callback"
# only for build on gitlab-ci to heroku
HEROKU_TOKEN='<heroku-api-token>'
HEROKU_NAME='<heroku-container-name>'
```

optional

```
PATH_PREFIX="/prefix"
```

### start local

```sh
npm i
PORT=3000 npm run dev
```

## deps

- `.nojekyll` for gh-pages
- `.gitignore` from wiki
