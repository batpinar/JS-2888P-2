const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Veri alınamadı");
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const displayUsers = (users) => {
    const container = document.getElementById("user-cards");
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
  
      card.innerHTML = createUserCard(user);
      container.appendChild(card);
    });
  };
  
  function createUserCard(user) {
    return `
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">
            <i class="fas fa-envelope"></i> ${user.email}<br>
            <i class="fas fa-phone"></i> ${user.phone}<br>
            <i class="fas fa-globe"></i> ${user.website}
          </p>
          <a href="posts.html?userId=${user.id}" class="btn btn-primary w-60" 
             onclick="sessionStorage.setItem('userName', '${user.name}')">
            <i class="fas fa-newspaper"></i> View User Posts
          </a>
        </div>
      </div>
    `;
  }
  
  fetchUsers();
  