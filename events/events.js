import newJokeButton from '../components/newJokeButton';
import punchLineButton from '../components/punchLineButton';
import jokeSetupButton from '../components/setupButton';
import clearDom from '../utils/clearDom';
import clearDom2 from '../utils/clearDom2';
import { makeJoke } from './makeJoke';
import punchLine from './punch';

const events = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id.includes('setup')) {
      clearDom();
      makeJoke();
      punchLineButton();
    }

    if (e.target.id.includes('punch')) {
      clearDom();
      punchLine();
      newJokeButton();
    }

    if (e.target.id.includes('new-joke')) {
      clearDom();
      clearDom2();
      jokeSetupButton();
    }
  });
};

export default events;
