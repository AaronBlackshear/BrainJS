const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

const moodGuesserCtrl = require('./controllers/moodGuesserController');
const conversationCtrl = require('./controllers/conversationController');

app.use(json());
app.use(cors());

app.post('/api/moodGuesser', moodGuesserCtrl.moodGuesser);
app.post('/api/conversationStarter', conversationCtrl.converse);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));