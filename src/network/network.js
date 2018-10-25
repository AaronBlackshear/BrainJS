import brain from 'brain.js'
import data from './moodGuessData';

const options = {
  learningRate: 0.01,
  inputSize: 50,
  hiddenLayers: [75],
  outputSize: 50,
  iterations: 20000,
}

const network = new brain.NeuralNetwork(options);

network.train(data);

const run = network.toFunction();

export default run;