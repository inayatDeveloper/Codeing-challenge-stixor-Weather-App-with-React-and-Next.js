Title:

Weather App with React and Next.js

Objective:

Build a simple weather application using React, Next.js, and the OpenWeatherMap API.

Description:

This challenge aims to create a simple weather application that allows users to search for the current weather by city. Your application should use the React and Next.js frameworks, with state management ideally through Redux, although other state management solutions are acceptable.

Requirements:

Set up a new Next.js 13 project and install the required dependencies (React, Next.js, Redux if using).
Create a single page with a search input field for the user to enter a city name.
When the user submits the search, request the WeatherAPI (https://www.weatherapi.com/) using a REST API call to fetch the current weather for the entered city. You must sign up for a free API key to access the weather data. Alternatively, you can also use the OpenWeatherMap API (https://openweathermap.org/api).
Make a .env.example file with placeholder values for all environment variables, and commit it to your repository.
Display the weather data on the page. At a minimum, show the city name, current temperature, weather conditions (e.g., clear, cloudy, rain), and an icon representing the weather condition.
Handle errors gracefully, such as displaying an error message when the city is not found or when the API request fails.
(Bonus) Implement state management using Redux or another solution to store the weather data and search history.
(Bonus) Use typescript.
Write clean, modular, and maintainable code. Please feel free to use comments to explain your thought process where necessary.

Assessment Criteria:

Ability to set up a Next.js project and configure dependencies
Proficiency in using React components, states, and hooks
Knowledge of making API requests and handling responses
Understanding of state management concepts (ideally using Redux)
Attention to error handling and edge cases
Code quality, organization, and maintainability
