const dialog = document.querySelector('#dialog-id');
const rememberButton = document.querySelector('.button-remember');
const saveButton = document.querySelector('.button-save');

rememberButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.showModal();
});

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.close();
});
