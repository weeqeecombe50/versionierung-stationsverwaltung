const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost/versionierung-stationsverwaltung';

app.use(cors());
app.use(express.json());

// MongoDB Verbindung
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API läuft');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});