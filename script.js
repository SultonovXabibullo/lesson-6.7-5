async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await response.json();
        return comments;
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h2>${comment.name}</h2>
            <p><strong>Email:</strong> ${comment.email}</p>
            <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const comments = await fetchComments();
    displayComments(comments);
});
