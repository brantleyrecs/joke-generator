import renderToDom from '../utils/renderToDom';
import getJokeRequest from '../api/promise';

const jokeData = {
  setup: '',
  delivery: ''
};

const makeJoke = () => {
  getJokeRequest().then((response) => {
    const { setup, delivery } = response;
    jokeData.setup = setup;
    jokeData.delivery = delivery;
    renderToDom('#setup', jokeData.setup);
  });
};

export {
  makeJoke, jokeData
};
