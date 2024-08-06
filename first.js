const weathers = [
  {
    city: "New York",
    temperature: 28,
    weather: "Sunny",
    icon: "sun",
    day: "day",
    time: new Date().toLocaleTimeString(),
  },
  {
    city: "London",
    temperature: 18,
    weather: "Cloudy",
    icon: "cloudy",
    day: "night",
    time: new Date().toLocaleTimeString(),
  },
  {
    city: "Tokyo",
    temperature: 30,
    weather: "Rainy",
    icon: "rainy",
    day: "day",
    time: new Date().toLocaleTimeString(),
  },
  {
    city: "Sydney",
    temperature: 22,
    weather: "Partly Cloudy",
    icon: "cloudy",
    day: "day",
    time: new Date().toLocaleTimeString(),
  },
  {
    city: "Paris",
    temperature: 25,
    weather: "Clear",
    icon: "snowy",
    day: "night",
    time: new Date().toLocaleTimeString(),
  },
];

const containerTwo = document.getElementById("containerTwo");
const containerThree = document.getElementById("containerThree");

const iconComponent = (icon) => {
  if (icon === "sun") {
    return `<div><i class="fa-solid fa-sun"></i></div>`;
  } else if (icon === "cloudy") {
    return `<div><i class="fa-solid fa-cloud"></i></div>`;
  } else if (icon === "rainy") {
    return `<div><i class="fa-solid fa-cloud-showers-heavy"></i></div>`;
  } else if (icon === "snowy") {
    return `<div><i class="fa-solid fa-snowflake"></i></div>`;
  }
};

const isDay = (day) => {
  if (day === "day") {
    return "containerTwo";
  } else {
    return "containerThree";
  }
};

const cardCompenent = (item) => {
  const { city, temperature, weather, day, time, icon } = item;
  const iconuud = iconComponent(icon);
  const whichDay = isDay(day);
  return ` 
          <div class="${whichDay}" >
            <div class="sectionOne">
              <div class="left">
                <div class="top">
                  <div id="location">${city}</div>
                  <div id="san">${time}</div>
                </div>
                <div class="bottom">
                  <div id="san">${weather}</div>
                </div>
              </div>
              <div class="right">
                <div id="cels">${temperature}</div>
                <div id="hzurgaa">${iconuud}</div>
              </div>
          </div>`;
};

const render = (weathers) => {
  weathers.forEach((item) => {
    containerTwo.innerHTML += cardCompenent(item);
  });
};
render(weathers);
