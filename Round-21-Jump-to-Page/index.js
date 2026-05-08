const button = document.querySelector('#goButton');
const input = document.querySelector('input');
const pageDiv = document.querySelector('#page');

async function loadPage(pageNumber) {

  try {

    const response = await axios.get(`page${pageNumber}.html`);

    pageDiv.innerHTML = response.data;

  } catch (error) {

    pageDiv.innerHTML = 'Page not found';

  }
}

document.addEventListener('DOMContentLoaded', function () {

  loadPage(1);

});

button.addEventListener('click', function () {

  const pageNumber = input.value;

  loadPage(pageNumber);

});
