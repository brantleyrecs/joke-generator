import renderToDom from '../utils/renderToDom';

const punchLineButton = () => {
  const domString = `
      <button class="btn btn-danger" id="punchline-button">Punch Line</button><br />
      `;
  renderToDom('#punch-button', domString);
};

export default punchLineButton;
