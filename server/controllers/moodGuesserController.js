const brain = require('brain.js');
const trainingData = require('../trainingData/moodGuessData');

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

const network = new brain.NeuralNetwork(options);

network.train(trainingData);

const moodGuesser = (req, res) => {
  const { smiles, frowns } = req.body;
  res.status(200).json(network.run({ smiles, frowns }));
}

module.exports = {
  moodGuesser,
}