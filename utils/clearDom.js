const clearDom = () => {
  document.querySelector('#setup-button').innerHTML = '';
  document.querySelector('#punch-button').innerHTML = '';
  document.querySelector('#new-joke').innerHTML = '';
};

export default clearDom;
