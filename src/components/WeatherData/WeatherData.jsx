
const WeatherData=({conditions,time,day }) => {
  return (
    <>
    <h3>{day}</h3>
      <p>conditions: {conditions}</p>
      <p>time: {time}</p>
    </>
  );
}

export default WeatherData