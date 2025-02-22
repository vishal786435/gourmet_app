const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI || "mongodb+srv://admin:admin@gourmet2go.5jpsj.mongodb.net/");

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE || "gourmet2go");
        const collection = database.collection(process.env.MONGODB_COLLECTION || "items");
        console.log(collection);
        
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
