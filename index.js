const { graphql, buildSchema } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolver = require("./lib/resolver");

const app = express();
const port = process.env.port || 3000;

//definir los esquemas

const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.GraphQL"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolvers: resolver });

//configurar el endpoint para graphql
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("servidor corriendo", `http://localhost:${port}/api`);
});
