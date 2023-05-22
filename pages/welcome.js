import renderToDom from '../utils/renderToDom';

const welcome = () => {
  const domString = `
  <h1>Joke Generator</h1>
  `;
  renderToDom('#header', domString);
};

export default welcome;
