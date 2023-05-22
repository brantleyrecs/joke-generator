import renderToDom from '../utils/renderToDom';

const newJokeButton = () => {
  const domString = `
  <button class="btn btn-danger" id="new-joke-button">New Joke</button><br />
  `;

  renderToDom('#new-joke', domString);
};

export default newJokeButton;
