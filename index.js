const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();
// middleware
app.use(cors());
app.use(express());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("I am running on the Home...");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://user404:adaJMCMJT3PV1ynq@cluster0.efpjwcu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("userDb").collection("users");
    const userCollection2 = client.db("userDb2").collection("users2");

    app.post("/informs", async (req, res) => {
      const result = await userCollection2.insertOne(req.body);
      // console.log(result);
      res.send(result)
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`I am running on ${port}`);
});
