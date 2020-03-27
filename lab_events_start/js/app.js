document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  
  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener('click', handleClick);

});

const handleFormSubmit = (event) => {
  event.preventDefault();

  const resultBook = document.createElement("li");
  resultBook.textContent = `
  ${this.title.value}
  ${this.author.value}
  ${this.category.value}`;

  const list = document.querySelector("#reading-list");
  list.appendChild(resultBook);

  document.getElementById('new-item-form').reset();
};

const handleClick = () => {
  const list = document.querySelector("#reading-list");
  let child = list.lastElementChild;
  while(child) {
    list.removeChild(child);
    child = list.lastElementChild; 
  };
};