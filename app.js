let creatBtn = document.querySelector(".btn");
let notesContainer = document.querySelector(".notes-container");
let note = document.querySelectorAll("input-box");
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("note");
}
showNotes();
function updateStorage() {
  localStorage.setItem("note", notesContainer.innerHTML);
}
creatBtn.addEventListener("click", () => {
  let notesContainer = document.querySelector(".notes-container");

  let notes = document.createElement("p");
  let img = document.createElement("img");
  img.setAttribute("src", "bin.png");
  notes.className = "input-box";
  notes.contentEditable = "true";
  notesContainer.appendChild(notes).appendChild(img);
});
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    note = document.querySelectorAll(".input-box");
    note.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

// function getNote() {
//   let note = document.querySelector(".notes");
//   console.log(note.classList.contains("d-none"));
//   if (note.classList.contains("d-none")) {
//     console.log("a");
//     console.log(note.classList.contains("d-none"));
//     note.classList.remove("d-none");
//     note.classList.add("d-inline");
//   } else {
//     note.classList.remove("d-inline");
//     note.classList.add("d-none");
//     console.log("aa");
//   }
// }
