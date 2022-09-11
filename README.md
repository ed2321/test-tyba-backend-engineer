[![ci-api-tyba](https://github.com/ed2321/test-tyba-backend-engineer/actions/workflows/ci-api-tyba.yaml/badge.svg)](https://github.com/ed2321/test-tyba-backend-engineer/actions/workflows/ci-api-tyba.yaml)
# test-tyba-backend-engineer
API to manage a local user operation and get restaurants

# Prerequisites
* Git
* node js
* Optional Docker

### Installation

Open a terminal in the root of the project:

```
cd src && npm i
```
### Usage
Before to start the application, make sure to add the respective `.env` file inside in the root of the project

run aplication 

```
npm run start
```

or if you want to run it in a development mode, try with this:

```
npm run start:dev
```

run the app with docker
```
docker-compose up --build
```

### npm scripts

- `npm start`: Run the application without restarting when files changes.
- `npm run start:dev` : Run the application and automatically restarts when files changes.
- `npm run lint`: Inspect code styles errors in the javascript files (also detect prettier format errors)
- `npm run format`: detect prettier formatting errors and fixes them
- `npm test`: Run unit tests
- `npm run test:watch`: Run unit tests and automatically restarts when `*.test.js` files changes.
- `npm run test:coverage`: Run test coverage.
- `npm run test:ci`: Run test continuos integration.
- `npm run test:integration`: Run test integration.


## Endpoints

POST api/users/register

```
curl --request POST \
  --url http://0.0.0.0:4000/api/users/register \
  --header 'Content-Type: application/json' \
  --data '{
	"firstName": "edinson",
	"lastName": "duran",
	"email": "edinsonduranrojas@gmail.com",
	"password": "12345"
}'
```
POST api/users/login

```
curl --request POST \
  --url http://0.0.0.0:4000/api/users/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "edinsonduranrojas@gmail.com",
	"password": "12345"
}'
```
POST api/users/logout

```
curl --request POST \
  --url http://0.0.0.0:4000/api/users/logout \
  --header 'Content-Type: application/json' \
  --header 'x-access-token: TOKEN_ACCESS' \
  --data '{
	"email": "edinsonduranrojas@gmail.com",
	"password": "12345"
}'
```

GET api/restaurant
```
curl --request GET \
  --url http://0.0.0.0:4000/api/restaurant \
  --header 'Content-Type: application/json' \
  --header 'x-access-token: TOKEN_ACCESS' \
  --data '{
	"city": "cucuta colombia"
}'
```
GET api/transactionsHistory
```
curl --request GET \
  --url http://0.0.0.0:4000/api/transactionsHistory
```


