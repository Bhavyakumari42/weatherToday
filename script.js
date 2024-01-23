const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const windspeed = document.querySelector('.windspeed');
const humidity = document.querySelector('.humidity');
const search_btn = document.getElementById('search-btn');
const city = document.querySelector('.inpt');
const weather_img = document.querySelector('.weatherimg');
const location_not_found = document.querySelector('.error');
const weatherbody= document.querySelector('.weatherbody');
const item1 = document.querySelector('.item1');
async  function checkweather(city)
{
    const api_key = "aec12754447fe3e865a5f98c7ecf43da";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

 const data =  await fetch(`${url}`).then(response=> response.json());
  
if(data.cod === '404')
{
    item1.style.height = "33vmax";
    location_not_found.style.display= "flex";
    
    weatherbody.style.display ="none";
    return;
}
  
location_not_found.style.display= "none";
   item1.style.height = "33vmax";
weatherbody.style.display ="flex";
 temp.innerHTML = `${Math.round( data.main.temp - 273.15)}°C`;
 humidity.innerHTML = `${data.main.humidity}%`;
 windspeed.innerHTML = `${ data.wind.speed}Km/hr`;
 description.innerHTML = `${data.weather[0].description}`;


switch(data.weather[0].main)
{
    case'Clouds': 
    weather_img.src = "cloud.png";
    break;
    case'Clear': 
    weather_img.src = "clear.png";
    break;
    case'Mist': 
    weather_img.src = "mist.png";
    break;
    case'Snow': 
    weather_img.src = "snow.png";
    break;
    case'Rain': 
    weather_img.src = "rain.png";
    break;
 default:
    weather_img.src = "default.png";
}

}





search_btn.addEventListener("click", ()=> {

    checkweather(city.value);

});