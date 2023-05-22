import welcome from '../pages/welcome';
import jokeSetupButton from '../components/setupButton';
import events from '../events/events';

const startApp = () => {
  welcome();
  jokeSetupButton();
  events();
};

export default startApp;
