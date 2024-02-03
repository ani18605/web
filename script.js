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