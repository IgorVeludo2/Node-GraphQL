import { ApolloServer, gql } from "apollo-server";

const users: string[] = [];

const typeDefs = gql`
  type Query {
    users: [String!]!
  }

  type Mutation {
    createUser(name: String!): String!
  } 
`

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users;
      }
    },
    Mutation: {
      createUser: (parent, args, ctx) => {
        users.push(args.name);
        return args.name;
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 HTTP server running on ${url}`);
})
