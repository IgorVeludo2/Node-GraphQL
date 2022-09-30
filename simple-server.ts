import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }

  # type Mutation {} 
`

const server = new ApolloServer({
  typeDefs, 
});

server.listen().then(({ url }) => {
  console.log(`🚀 HTTP server running on ${url}`);
})
