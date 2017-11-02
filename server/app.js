const hostname = '127.0.0.1';
const port = 4000;
const database = 'exercise-tracker';
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

mongoose.connect(`mongodb://${hostname}/${database}`,
{ useMongoClient: true });
const db = mongoose.connection;
db.on('open', (ref) => { console.log("Mongodb connected successfully.")});
db.on('error', (err) => {
  console.log("Could not connect to Mongodb.");
  console.err(err);
});

app.use(bodyParser.json());

const mainRoutes = require('./routes');
app.use('/api/exercise', mainRoutes);

app.listen(port, () => {
  console.log(`Application is running on http://${hostname}:${port}`);
});
