const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI || "https://teams.microsoft.com/l/message/19:7f1876a3-eae7-4713-8f15-f394f4eb92af_8238b593-d1a3-4438-93c8-b6be3563d7de@unq.gbl.spaces/1740182457911?context=%7B%22contextType%22%3A%22chat%22%7D");

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
