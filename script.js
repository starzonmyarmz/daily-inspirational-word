const now = new Date()
const start = new Date(now.getFullYear(), 0, 0)
const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
const oneDay = 1000 * 60 * 60 * 24
const day = Math.floor(diff / oneDay)

async function getWord(day) {
  const response = await fetch("./words.json")
  const data = await response.json()
  const word = data[day]

  document.querySelector('h1').innerHTML = word
}

getWord(day)
