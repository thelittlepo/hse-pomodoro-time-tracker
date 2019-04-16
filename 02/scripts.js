const form = document.querySelector('form')

form.onsubmit = function startTimer(e) {
  e.preventDefault()

  const input = e.target.querySelector('input[type=text]')

  console.log(input.value)
}
