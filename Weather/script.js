let cloud_pct = document.getElementById('cloud_pct')
let temp = document.getElementById('temp')
let feels_like = document.getElementById('feels_like')
let humidity = document.getElementById('humidity')
let min_temp = document.getElementById('min_temp')
let max_temp = document.getElementById('max_temp')
let wind_speed = document.getElementById('wind_speed')
let wind_degrees = document.getElementById('wind_degrees')
let sunrise = document.getElementById('sunrise')
let sunset = document.getElementById('sunset')
let weatherLocation = document.getElementById('weatherLocation')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'API_KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (wlocation) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + wlocation, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			weatherLocation.innerHTML = wlocation.slice(0, 1).toUpperCase() + wlocation.slice(1, wlocation.length).toLowerCase();
			cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		}).catch((err) => {
			console.log(err)
		});
}
getWeather('Chak')
document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault();
	if (document.getElementById('search').value) {
		getWeather(document.getElementById('search').value)
	}

})
