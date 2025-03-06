const { MongoClient } = require("mongodb");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:admin@gourmet2go.5jpsj.mongodb.net/";
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || "gourmet2go";
const MONGODB_COLLECTION = process.env.MONGODB_COLLECTION || "items";

if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
}

let client;
let clientPromise;


if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

const handler = async (event) => {
    console.log("Function triggered!");  

    try {
        const database = (await clientPromise).db(MONGODB_DATABASE);
        const collection = database.collection(MONGODB_COLLECTION);

        
        const items = await collection.find({}).toArray();

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ items }),
        };

    } catch (error) {
        console.error("MongoDB Error:", error);  

        return { 
            statusCode: 500, 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ error: "MongoDB connection failed", details: error.toString() }) 
        };
    }
};

module.exports = { handler };


