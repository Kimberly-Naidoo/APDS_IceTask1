import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(connectionString);

let conn;
try{
    conn = await client.connect();
    console.log("mongoDB is CONNECTED!!!: ");
} catch(e){
    console.error(e);
}

let db = client.db("Cluster123");

export default db