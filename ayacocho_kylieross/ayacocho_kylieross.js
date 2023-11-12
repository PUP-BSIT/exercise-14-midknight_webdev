function leavecomment() {
    let nameInput = document.getElementById("name_comments");
    let comment = document.getElementById("comment_box");
    if(nameInput.value.length > 0 && comment.value.length > 0) {
        document.getElementById("submit_button").disabled = false;
    }

    else {
        document.getElementById("submit_button").disabled = true;
    }
}

function addNewComment() {
    let name = document.getElementById("name_comments").value;
    let comment = document.getElementById("comment_box").value;

    if (name && comment) {
        let commentSection = document.querySelector(".comments ul");
        let newCommentItem = document.createElement("li");
        newCommentItem.innerHTML = `<strong>${name}</strong>
                                    <p>${comment}</p>`;
        commentSection.appendChild(newCommentItem);

        document.getElementById("name_comments").value = "";
        document.getElementById("comment_box").value = "";

        document.getElementById("submit_button").disabled = true;
    }
}