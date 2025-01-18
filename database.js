const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://BavnitSingh:9iPKtONhSoYULhyV@namastenode.n4a4r.mongodb.net/";
const client = new MongoClient(url);

const dbname = "HelloWorld";
async function main() {
  // use connect method to connect to server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbname);
  const collection = db.collection("User");

  // Insert document

  const data = [
    {
      firstname: "Harman Singh",
      lastname: "Chhabda",
      Age: 14,
      city: "Ahmedabad",
      Phone_no: "8297364673",
    },
    {
      firstname: "Bavnit Singh",
      lastname: "Chhabda",
      Age: 20,
      city: "Ahmedabad",
      "Phone_no.": "2728393673",
    },
  ];
  // Insert document
  // const insertResult = await collection.insertMany(data);
  // console.log("Inserted documents =>", insertResult);


  // Find all documents with the filter of first name : "Bavnit Singh"
  const findResultByName = await collection
    .find({ firstname: "Bavnit Singh" })
    .toArray();
  console.log(findResultByName);

const count = await collection.estimatedDocumentCount({ firstname: "Bavnit Singh" })
    
  console.log("Total count of Bavnit Singh: ", count);
  // Read collection
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  // Update document
  // const updateResult = await collection.updateOne({ firstname:"Gurmit Singh" }, { $set: { firstname: "Bavnit Singh" } });
  // console.log("Updated documents =>", updateResult);

 // Delete document
  // const deleteResult = await collection.drop({
  //   firstname: "Bavnit Singh",
  // });
  // console.log("Deleted documents =>", deleteResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
