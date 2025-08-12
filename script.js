const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.getElementById("posts");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("inner-post");
      postElement.style.border = "5px solid #ccc";
      postElement.style.backgroundColor = "#f9f9f9";
      postElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      postElement.style.fontFamily = "Arial, sans-serif";
      postElement.style.color = "#333";
      postElement.style.display = "flex";
      postElement.style.flexDirection = "column";
      postElement.style.alignItems = "center";
      postElement.style.justifyContent = "center";
      postElement.style.padding = "20px";
      postElement.style.margin = "10px";
      postElement.style.borderRadius = "10px";
      postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
            <p><strong>Author ID:</strong> ${post.userId}</p>
            <p><strong>Post ID:</strong> ${post.id}</p>
            <p>🤍🤍🤍</p>
          `;

      postsContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//if key is required...
//const apiKey = 'your_api_key_here';
// const apiUrl = `https://api.example.com/data?api_key=${apiKey}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
