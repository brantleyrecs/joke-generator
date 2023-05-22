import renderToDom from '../utils/renderToDom';
import { jokeData } from './makeJoke';

const punchLine = () => {
  renderToDom('#punch', jokeData.delivery);
};

export default punchLine;
