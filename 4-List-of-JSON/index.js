const user_URL = `https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json`;

async function loadData() {

  const response = await axios.get(user_URL);
  const users = response.data.users;

  const userList = document.querySelector("#output");

  for (const user of users) {

    const li = document.createElement('li');

    li.textContent =
      `${user.firstName} ${user.lastName} — (${user.emailAddress})`;

    userList.appendChild(li);
  }
}

loadData();
