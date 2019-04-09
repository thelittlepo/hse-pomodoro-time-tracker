const form = document.querySelector('form')
const tasks = document.querySelector('ul')
const progress = document.querySelector('.progress')
// const WORK_TIME = 25 * 60 * 1000
const WORK_TIME = 2000

function startTimer(e) {
  e.preventDefault()

  const input = e.target.querySelector('input')

  input.disabled = true
  progress.style.width = '100vw'
  progress.style.transitionDuration = WORK_TIME + 'ms'

  setTimeout(function () {
    input.focus()
    input.disabled = false
    progress.style.width = ' '
    progress.style.transitionDuration = ''

    // listItem === li
    const listItem = document.createElement('li')

    listItem.innerText = input.value
    // Добавляем внутрь ul ноый li элемент
    tasks.appendChild(listItem)

    input.value = ''
  }, 2000)
  // console.log('input value: ', input.value);
}

form.onsubmit = startTimer
