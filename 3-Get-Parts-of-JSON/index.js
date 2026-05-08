const user_URL = 'https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json';

const btn = document.querySelector("#btnload");
const outputUl= document.querySelector("#output");

async function loadUsers() {

  const response = await axios.get(user_URL);
  const user = response.data;

  outputUl.innerHTML = `
    <ul>
      <li>First Name: ${user.firstName}</li>
      <li>Last Name: ${user.lastName}</li>
      <li>Street Address: ${user.address.streetAddress}</li>
      <li>City: ${user.address.city}</li>
      <li>State: ${user.address.state}</li>
      <li>Postal Code: ${user.address.postalCode}</li>
    </ul>
  `;
}

btn.addEventListener('click', loadUsers);
