// import WeatherForecast componenet
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.jsx";
import WeatherData from "./components/WeatherData/WeatherData.jsx";

const weatherForecasts = [
  {
    day: "Mon",
    img: "https://ga-curriculum.github.io/react-components-lab/assets/day.svg",
    imgAlt: "sun icon",
    conditions: "sunny",
    time: "Morning",
  },
  {
    day: "Tue",
    img: "https://ga-curriculum.github.io/react-components-lab/assets/night.svg",
    imgAlt: "moon icon",
    conditions: "clear",
    time: "Night",
  },
  {
    day: "Wed",
    img: "https://ga-curriculum.github.io/react-components-lab/assets/stormy.svg",
    imgAlt: "clouds with lightning icon",
    conditions: "stormy",
    time: "All Day",
  },
  {
    day: "Thu",
    img: "https://ga-curriculum.github.io/react-components-lab/assets/cloudy-day.svg",
    imgAlt: "sun overcast by clouds icon",
    conditions: "overcast",
    time: "Evening",
  },
  {
    day: "Fri",
    img: "https://ga-curriculum.github.io/react-components-lab/assets/cloudy-night.svg",
    imgAlt: "moon overcast by clouds icon",
    conditions: "cloudy",
    time: "Night",
  },
];

const App = () => {
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {/* Map through weatherforecast array to use WeatherForecast component */}
        {/* Give it data as props, which will be accessed in the componenet itself, by its children  */}
        {weatherForecasts.map((forecast, index) => {
          return <WeatherForecast key={index} {...forecast} />;
        c})}
        
      </section>
    </>
  );
};

export default App;

// RECOMMENDED PLAN
// Check that you have no error after every step (1., 2., ...)

/*
1. create WeatherIcon directory in components
  a. create WeatherIcon.jsx file WeatherIcon directory
  b. define a WeatherIcon function in WeatherIcon.jsx
  c. Within that function, return () the element you want to extract from WeatherForecast component (img)
    Keep in mind that img should receive data to display. How do you get that data from the parent of WeatherIcon?
  d. export the WeatherIcon function comp you defined

2. create WeatherData directory in components
  a. create WeatherData.jsx file WeatherData directory
  b. define a WeatherData function in WeatherData.jsx
  c. Within that function, return () the element you want to extract from WeatherForecast component (the 2 p tags)
    Keep in mind that these p tags should receive data to display. How do you get that data from the parent of WeatherData?
    How do you ensure this component only returns 1 component and not 2 p tags (which won't work)?
  d. export the WeatherData function comp you defined


  3. In App.jsx, import the WeatherForecast component
    a. within the section element, loop/map through the weatherForecasts array
    b. within the callback function, (explicitly) return the WeatherForecast component (meaning no return if you used () after the arrow)
      for each forecast, pass object to the WeatherForecast component as a prop (a key={value} pair)

  4. Back to WeatherForeast compoment:
    a. import WeatherIcon
      then use it as <ComponentName /> to replace the img tag
    b. import WeatherData
    then use it as <ComponentName /> to replace the 2 p tags

    In the parameter parenthesis of the WeatherForecast component, destructure the props object to access each data item you'lld need

    c. Pass the relevant data to the WeatherIcon component as prop. what info does this component need?
      Then go back to the WeatherIcon.jsx to destructure and access the data you passed it
      use that data in the return statement
      
      d. Pass the relevant data to the WeatherData component as prop. what info does this component need?
      Then go back to the WeatherData.jsx to destructure and access the data you passed it
      use that data in the return statement

    5. If everything was set up correctly, you should be able to see the UI that was in the lab setup. 
    If not there's some debugging to do, try it out for 10-15min and then reach out for help if there's no progress
*/