const fetchPosts = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        
        const userName = sessionStorage.getItem('userName');
        document.getElementById('userName').textContent = userName + "'s Posts";

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!postsResponse.ok) throw new Error("Gönderiler alınamadı");
        const posts = await postsResponse.json();
        
        displayPosts(posts);
    } catch (error) {
        console.error(error.message);
    }
};

const displayPosts = (posts) => {
    const container = document.getElementById("posts");
    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "col-md-6 mb-4";
        postDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
        `;
        container.appendChild(postDiv);
    });
};

fetchPosts(); 