# Forum
```
cd client
yarn install
yarn run build
cd dist
http-server --cors='*'
```
The client will run on port 8080

The server requires mongod started on default port
```
cd server
npm install
npm run server
```
The server will run on port 3000
path for GraphQL is /graphql
