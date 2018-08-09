class Search {
  constructor (searchTerm) {
    this.searchTerm = searchTerm
    this.searchUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=00234cebb5770bb47207fd9f52bd28c3&q=' + searchTerm + '&units=imperial'
  }

  getSearchResults () {
    fetch(this.searchUrl) /* disable-eslint */
      .then(Response => {
        console.log('Response = ', Response)
        if (Response.status === 200) {
          return Response.json()
        } else {
          console.log('error', Response)
        }
      }).then(weatherResult => {
        document.querySelector('.searchResults').textContent = `${weatherResult.name} forecast right now is ${weatherResult.main.temp} ° Fahrenheit with ${weatherResult.main.humidity}%  humidity`
      })
  }
}

const weatherButton = () => { 
  // console.log('Weather Button is being clicked')
  const userInput = document.querySelector('.input').value
  const weatherButton = new Search(userInput)
  weatherButton.getSearchResults()
  } 
  
  document.querySelector('.weather-button').addEventListener('click', weatherButton)
  
  // Since the project calls for one city I'm going with a span instead outputting New Li and appending child
  // const parent = document.querySelector('.searchResults')
  // const newLi = document.createElement('li')
  // newLi.textContent = weatherResult.main.temp
  // parent.appendChild(newLi)