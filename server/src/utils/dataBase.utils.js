const config = require('../../config/default.json');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${config.db.user}:${config.db.password}@${config.db.name}.${config.db.host}/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runDB() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(e) {
        console.dir(e);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

module.exports = {
  runDB,
}