const form = document.querySelector('form')
const tasks = document.querySelector('ul')
const progress = document.querySelector('.progress')
// const WORK_TIME = 25 * 60 * 1000
const WORK_TIME = 2000

function startTimer(e) {
  // По умолчанию при нажатии на Ввод форма прегружает страницу
  // Ниже мы говорим форме не делать действия по умолчанию
  e.preventDefault()

  // Мы слушаем события (onclick, onsubmit, onfocus и т.д) на элементах
  // Таргет – это тот объект, на котором произошло событие (е)
  // form.onsubmit = startTimer - вот тут мы вешаем событие на форму
  // Мы знаем, что внутри формы лежит инпут, а событие submit происходит у формы
  // Поэтому мы получаем доступ к инпуту через событие и форму
  const input = e.target.querySelector('input')
  // Добавили атрибут дисейблед внутрь html tag инпута
  // Это заблокировало возможность писать и поменяло цвет
  input.disabled = true

  // Создаем ключ, чтобы отличать друг от друга заверешенные задачи
  // В будущем мы сможем находить и удалять записи при помощи ключа
  const key = Date.now()
  // Записываем в память браузера новый элемент
  localStorage.setItem(key, input.value)

  progress.style.width = '100vw'
  progress.style.transitionDuration = WORK_TIME + 'ms'

  setTimeout(function () {
    // Снова дали возможность писать в инпуте
    input.disabled = false
    // Снова сфокусировали на инпуте
    input.focus()

    progress.style.transitionDuration = ''
    progress.style.width = ''

    const listItem = document.createElement('li')
    listItem.innerText = input.value
    tasks.appendChild(listItem)

    input.value = ''
  }, WORK_TIME)
}

function loadHistory() {
  const historySize = localStorage.length

  if (historySize > 0) {
    for (var i = 0; i < historySize; i++) {
      const key = localStorage.key(i)
      const taskName = localStorage.getItem(key)

      const listItem = document.createElement('li')
      listItem.innerText = taskName
      tasks.appendChild(listItem)
    }
  }
}

form.onsubmit = startTimer
loadHistory()
