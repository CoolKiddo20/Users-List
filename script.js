// API URL-ni to'g'ri o'rnatganingizga ishonch hosil qiling
const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // O'rnatilgan API URL misoli

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    renderUsers(data);
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('user-container').innerText = 'Failed to load users.';
  });

function renderUsers(users) {
  const userContainer = document.getElementById('user-container');
  userContainer.innerHTML = '';

  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.className = 'user';

    userElement.innerHTML = `
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
    `;

    userContainer.appendChild(userElement);
  });
}
