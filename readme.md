# react-web-app

- [x] draft of auth
- [x] hasura gql ssr and live query
- [x] image responsive
- [x] mui ssr

## env or .env

```
HASURA_GQL_SSL=0 # 1 for production with ssl
HASURA_GQL_SECRET='myadminsecretkey'
HASURA_GQL_PATH='localhost:8080/v1/graphql'
PORT=3000

AUTH_GOOGLE_CLIENT_ID="<id>"
AUTH_GOOGLE_CLIENT_SECRET="<secret>"
AUTH_GOOGLE_CALLBACK="https://<repo>.herokuapp.com/api/auth/google/callback"
```

optional

```
PATH_PREFIX="/prefix"
```

## deps

- `.nojekyll` for gh-pages
- `.gitignore` from wiki
