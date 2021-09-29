const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/bucketlistbuddy", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  

});

const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});


