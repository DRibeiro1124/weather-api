Yesterday you created a simple weather viewer. Today, we discussed a new topic, Object Oriented Programing. This involved the thought of abstraction and encapsulation (among other ideas). For tonight, refactor your code to use classes to encapsulate and abstract your code and ideas from yesterday.

Objectives:
##Practice refactoring working code
##Practice thinking and working in objects
Requirements:
##make a new branch from your working code from the previous night's assignment using the following command:
##git branch oop-refactor
##git checkout oop-refactor
##On this new branch, refactor your code to use at least 2 classes
##Explorer Mode
  ###-Create a class that encapsulates the all the logic with working with the WeatherAPI. Call the class WeatherAPI. It should have a view properties such API_URL and few methods such as getWeatherByZipCode
  ###-Create a class that holds all the logic for interacting with the DOM. This should have methods such as addForecastToDOM and getUserInput
  ###-Submit this by pushing the the branch to github but using git push origin oop-refactor