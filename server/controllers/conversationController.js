const brain = require('brain.js');
const trainingData = require('../trainingData/conversationData');

const options = {
  learningRate: 0.01,
  errorThresh: 0.005,
  momentum: 0.2,
  timeout: 5000,
  inputSize: 100,
  hiddenLayers: [50],
  outputSize: 1,
  iterations: 20000,
}

const network = new brain.recurrent.LSTM(options);

network.train(trainingData);

const converse = (req, res) => {
  const { input } = req.body;
  res.status(200).json(network.run(input));
}

module.exports = {
  converse,
}