document.addEventListener("DOMContentLoaded", () => {
    let userNameInput = document.getElementById("user_name");
    let userCommentInput = document.getElementById("user_comment");
    let addComment = document.getElementById("comment");
    let commentList = document.getElementById("comment_list");

    addComment.addEventListener("click", () => {
        let name = userNameInput.value;
        let comment = userCommentInput.value;

        if (name.length > 0 && comment.length > 0) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>Full Name:</strong> <p>${name}<p> 
            <strong>Comment:</strong> <p>${comment}</p>`;
            commentList.appendChild(listItem);

            userNameInput.value = "";
            userCommentInput.value = "";
        }
    });
});

function onTextChange() {
    let userName = document.getElementById("user_name");
    let userComment = document.getElementById("user_comment");
    if (userName.value.length > 0 && userComment.value.length > 0){ 
            document.getElementById("comment").disabled = false;
    } 
    else {
    document.getElementById("comment").disabled = true;
}}