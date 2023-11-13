document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.querySelector("#add_button");
  let fullNameInput = document.querySelector("#full_name");
  let commentInput = document.querySelector("#comment");

  addButton.addEventListener("click", addComment);

  fullNameInput.addEventListener("input", enableCommentButton);
  commentInput.addEventListener("input", enableCommentButton);
});

function enableCommentButton() {
  let fullNameInput = document.querySelector("#full_name");
  let commentInput = document.querySelector("#comment");
  let addButton = document.querySelector("#add_button");

  addButton.disabled = fullNameInput.value.trim() === "" ||
  commentInput.value.trim() === "";
}

function addComment() {
  let fullNameInput = document.querySelector("#full_name");
  let commentInput = document.querySelector("#comment");
  let itemList = document.querySelector("#comment_list");

  let fullName = fullNameInput.value;
  let comment = commentInput.value;

  let listItem = document.createElement("li");
  listItem.textContent = fullName; 
  let commentText = document.createElement("p"); 
  commentText.textContent = comment;
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    itemList.removeChild(listItem);
  });
  listItem.appendChild(commentText);
  listItem.appendChild(deleteButton);
  itemList.appendChild(listItem);
  fullNameInput.value = "";
  commentInput.value = "";
  enableCommentButton();
}

