document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
  form.addEventListener('submit', e => {
  let words = form['new-task-description'].value
  let tasker = document.getElementById("tasks")
  let elemental = document.createElement("li")
  elemental.textContent = words,
  tasker.appendChild(elemental),
  e.preventDefault()
  }
  )

})

// let x = document.createElement("task");
// x.setAttribute("text", "task");

// Take the text we put in location #a, put it in location #b,
// which is our #list. 