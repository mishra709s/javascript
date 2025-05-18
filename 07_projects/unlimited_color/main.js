let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let intervalId

let randomColor = () => {
  const hex = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  console.log(color)
  return color
}

const startChangingColor = () => {
  const changeBgColor = () => {
    document.body.style.backgroundColor = randomColor()
  }
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)
  }
}
const stopChangingColor = () => {
  clearInterval(intervalId)
  intervalId = null
}

startBtn.addEventListener('click', startChangingColor)
stopBtn.addEventListener('click', stopChangingColor)
