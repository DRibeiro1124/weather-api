const main = () => {
  // document.querySelector('h1').textContent += '?'
}

const weatherButton = () => {
  // console.log('Weather Button is being clicked')
  const userInput = document.querySelector('.input').value
  // console.log(userInput)

  const _url = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial' + '&appid=00234cebb5770bb47207fd9f52bd28c3'

  fetch(_url)
    .then(Response => {
      console.log('Response = ', Response)
      if (Response.status === 200) {
        return Response.json()
      } else {
        console.log('error', Response)
      }
    }).then(weatherResult => {
      document.querySelector('.searchResults').textContent = userInput + ' forecast right now is ' + weatherResult.main.temp + '° Fahrenheit'
      console.log('Search Results = ', weatherResult)

      // Since the project calls for one city I'm going with a span instead outputting New Li and appending child
      // const parent = document.querySelector('.searchResults')
      // const newLi = document.createElement('li')
      // newLi.textContent = weatherResult.main.temp
      // parent.appendChild(newLi)
    })
}

document.querySelector('.weather-button').addEventListener('click', weatherButton)