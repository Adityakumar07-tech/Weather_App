 const apikey = "e24a6eaa8ec6a64f47d78f9324eade45";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const weatherIcon = document.querySelector(".weather-icon");



    async function checkweather(city){
       
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        var data = await response.json();
       
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".Temperature").innerHTML = Math.round( data.main.temp )  + "°C";
        document.querySelector(".humidity").innerHTML = Math.round( data.main.humidity ) + "%";
        document.querySelector(".Wind").innerHTML = Math.round( data.wind.speed ) + " km/h"; 

        if(data.weather[0].main=="clouds"){
            weatherIcon.src = "image/clouds.png";
        }
        else if(data.weather[0].main=="clear"){
            weatherIcon.src = "image/sun.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src = "image/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "image/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "image/mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src = "image/snow.png";
        }
        else{
            weatherIcon.src = "image/weather.png";
        }

    }

        searchBtn.addEventListener("click", ()=>{
            checkweather(searchBox.value);

        })

    