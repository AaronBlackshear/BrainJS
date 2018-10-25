import brain from 'brain.js'
import data from './conversationData';

const options = {
  learningRate: 0.005,
  inputSize: 50,
  hiddenLayers: [75],
  outputSize: 50,
  iterations: 20000,
}

const network = new brain.recurrent.LSTM(options);

network.train(data);

console.log(network.run('Hello'))

const run = network.toFunction();

export default run;