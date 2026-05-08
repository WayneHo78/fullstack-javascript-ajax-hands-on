async function loadPet() {

  const response = await axios.get('data.json');
  const pets = response.data;

  const outputDiv = document.querySelector('#output');

  for (const pet of pets) {

    outputDiv.innerHTML += `
      <h2>${pet.Name}</h2>

      <ul>
        <li>Type of Animal: ${pet["Type of Animal"]}</li>
        <li>Breed: ${pet.Breed}</li>
        <li>Date of Birth: ${pet["Date of Birth"]}</li>
        <li>Medical Conditions: ${pet["Medical Conditions"].join(', ')}</li>
      </ul>
      
      <img src="${pet.Photo}" width="200">

      <hr>
    `;
  }
}

document.addEventListener('DOMContentLoaded', loadPet);
