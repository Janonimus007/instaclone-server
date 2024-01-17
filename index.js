const mongoose = require('mongoose');
const {ApolloServer} = require("apollo-server")
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({path:".env"});

mongoose.connect(process.env.BBDD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true
  })
    .then(() => {
      console.log("Conexión exitosa");
      server();
    })
    .catch((err) => {
      console.error("Error de conexión:", err);
    });

function server(){
    const serverApolo = new ApolloServer({
        typeDefs,
        resolvers,
    })
    serverApolo.listen().then(({url})=>{
        console.log('servidor levantado',url);
    })
}