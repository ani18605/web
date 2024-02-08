    const editButton = document.querySelector('.edit');
    const deleteButton = document.querySelector('.delete');
    const comment = document.querySelector('.comment p');

    editButton.addEventListener('click', () => {
      const confirmation = prompt('Are you sure you want to edit the comment? Type "confirm" to confirm.');
      if (confirmation && confirmation.toLowerCase() === 'confirm') {
        const newComment = prompt('Enter the new comment:');
        if (newComment) {
          comment.textContent = newComment;
        }
      }
    }); 
    deleteButton.addEventListener('click', () => {
      const confirmation = confirm('Are you sure you want to delete this post?');
      if (confirmation) {
        const postedDiv = document.querySelector('.posted');
        postedDiv.remove();
      }
    });
    const like = document.querySelector(".liked");
    let flag = true;
    like.addEventListener("click", function() {
      const button = like.querySelector("img");
      button.src = flag ? "state_clicked.png" : "heart.png";
      flag = !flag;
    });
    const postButton = document.querySelector('.post-btn');
postButton.addEventListener('click', () => {
    const postContent = document.getElementById('typebox').value;
    
    if (postContent.trim() !== '') {
        const newPost = document.createElement('div');
        newPost.classList.add('posted');
        newPost.innerHTML = `
        <div class="start">
        <img src="profile_image.png">
        <h5>Aniruddha Patil @ani18605</h5>
        <button class="edit"><img src="edit.png"></button>
        <button class="delete"><img src="delete.png"></button>
        <button class="reply">Reply</button>
      </div>
      <div class="comment">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, nam.</p>
      </div>
      <div class="like">
        <button class="liked"><img src="heart.png"></button>
      </div>
        `;
        document.querySelector('.container').appendChild(newPost);
        document.getElementById('typebox').value = '';
    } else {
        alert('Please enter some content to post.');
    }
});
const replyButtons = document.querySelectorAll('.reply');
replyButtons.forEach(replyButton => {
    replyButton.addEventListener('click', () => {
        const replyContent = prompt('Etr your reply:');
        if (replyContent !== null && replyContent.trim() !== '') {
            const replyElement = document.createElement('div');
            replyElement.classList.add('reply');
            replyElement.innerHTML = replyContent;
            replyButton.parentElement.parentElement.appendChild(replyElement);
        } else if (replyContent !== null && replyContent.trim() === '') {
            alert('Please etr some text');
        }
    });
});

