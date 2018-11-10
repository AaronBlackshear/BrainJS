const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;
const moodGuesserCtrl = require('./controllers/moodGuesserController'); 

app.use(json());
app.use(cors());

app.post('/api/moodGuesser', moodGuesserCtrl.moodGuesser);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));