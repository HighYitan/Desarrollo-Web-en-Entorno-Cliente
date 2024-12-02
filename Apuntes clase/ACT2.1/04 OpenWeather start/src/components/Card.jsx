
      url = "http://openweathermap.org/img/w/";
      iconUrl = url + weather.weather[0].icon + ".png";

      iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
      iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
      iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

      forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
      forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
      forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
  