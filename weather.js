$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "The weather report shows that it is currently " + data.currently.summary + "with a temerpature of" + data.currently.temperature + " degrees.<br>The temperature feels like " + data.currently.apparentTemperature + " degrees.";
    var forecast = "The three day forecast calls for " + data.daily.summary;

    // End of your code

    $('.weather-report').html(markup);
    $('.weather-report2').html(forecast);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
