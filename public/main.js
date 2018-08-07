const main = () => {
  // document.querySelector('h1').textContent += '?'
}

const weatherButton = () => {
  // console.log('Weather Button is being clicked')
  const userInput = document.querySelector('.input').value
  console.log(userInput)

  const _url = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=00234cebb5770bb47207fd9f52bd28c3'

  fetch(_url)
    .then(Response => {
      console.log('Response = ', Response)
      if (Response.status === 200) {
        return Response.json()
      } else {
        console.log('error', Response)
      }
    }).then(searchResults => {
      console.log('Search Results = ', searchResults)
    })
}

document.querySelector('.weather-button').addEventListener('click', weatherButton)