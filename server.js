const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME || 'versionierung-stationsverwaltung';

app.use(cors());
app.use(express.json());

// MongoDB Verbindung
mongoose.connect(`mongodb://localhost/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API läuft');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});