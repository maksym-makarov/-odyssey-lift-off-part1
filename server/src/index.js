const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

// Store in-cache
const tracks = [
  {
    id: 1,
    title: "Track_01",
    author: {
      id: 1,
      name: "Mike",
    },
  },
  {
    id: 2,
    title: "Track_02",
    author: {
      id: 2,
      name: "Alex",
    },
  },
  {
    id: 3,
    title: "Track_03",
    author: {
      id: 3,
      name: "Cris",
    },
  },
  {
    id: 4,
    title: "Track_04",
    author: {
      id: 1,
      name: "Mike",
    },
  },
  {
    id: 5,
    title: "Track_05",
    author: {
      id: 2,
      name: "Alex",
    },
  },
  {
    id: 6,
    title: "Track_06",
    author: {
      id: 3,
      name: "Cris",
    },
  },
];

// Resolvers
const resolvers = {
  Query: {
    tracksForHome: () => tracks,
  },
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

const runServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  return url;
};

runServer().then((url) => console.log(`🚀  Server ready at: ${url}`));
