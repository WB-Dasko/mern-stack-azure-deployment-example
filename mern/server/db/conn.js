
const { MongoClient } = require("mongodb");
const connectionString = process.env.COSMODB_URI || "";

const client = new MongoClient(connectionString);

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("SchmitzCargo");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },

  getDb: function () {
    return _db;
  },
};





//
// let conn;

// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("SchmitzCargo");

// export default db;
