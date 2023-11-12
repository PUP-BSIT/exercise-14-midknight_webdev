
function commentButton () {

    let nameInput = document.getElementById("name_input");
    let commentInput = document.getElementById("comment_input");
    let commentSection = document.getElementById("comment_section");
    let commentButton = document.getElementById("comment_button");

    let name = nameInput.value;
    let comment = commentInput.value;


    let li = document.createElement("li");
    let p = document.createElement("p");
    
    li.textContent = name;
    p.textContent =  comment;
    
    commentSection.appendChild(li);
    li.appendChild(p);

    nameInput.value = "";
    commentInput.value = "";
    
    commentButton.disabled = true;
}

function checkInput() {
    let nameInput = document.getElementById("name_input");
    let commentInput = document.getElementById("comment_input");
    let commentButton = document.getElementById("comment_button");

    let nameValue = nameInput.value.trim();
    let commentValue = commentInput.value.trim();

    if (nameValue.length > 0 && commentValue.length > 0) {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}