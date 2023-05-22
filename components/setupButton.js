import renderToDom from '../utils/renderToDom';

const jokeSetupButton = () => {
  const domString = `
        <button class="btn btn-danger" id="joke-setup-button">Joke Setup</button><br />
        `;
  renderToDom('#setup-button', domString);
};

export default jokeSetupButton;
