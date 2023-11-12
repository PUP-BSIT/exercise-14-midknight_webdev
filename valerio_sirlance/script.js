document.addEventListener("DOMContentLoaded", () => {
    const userNameInput = document.getElementById('user_name');
    const userCommentInput = document.getElementById('user_comment');
    const commentButton = document.getElementById('comment_button');
    const commentList = document.getElementById('comment_list');

    commentButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        const userComment = userCommentInput.value.trim();

        if (userName && userComment) {
            const listComment = document.createElement('li');
            listComment.innerHTML = `${userName}
                <p>${userComment}</p>`;

            commentList.append(listComment);
            userNameInput.value = '';
            userCommentInput.value = '';
        }
    });
});