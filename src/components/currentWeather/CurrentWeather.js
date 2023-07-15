import "./CurrentWeather.css";
// .weather {
//   width: 300px;
//   border-radius: 6px;
//   box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
//   color: #fff;
//   background-color: #333;
//   margin: 20px auto 0 auto;
//   padding: 0 20px 20px 20px;
// }

// .top,
// .bottom {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .city {
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 1;
//   margin: 0;
//   letter-spacing: 1px;
// }

// .weather-description {
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 1;
//   margin: 0;
// }

// .weather-icon {
//   width: 100px;
// }

// .temperature {
//   font-weight: 600;
//   font-size: 70px;
//   width: auto;
//   letter-spacing: -5px;
//   margin: 10px 0;
// }

// .details {
//   width: 100%;
//   padding-left: 20px;
// }

// .parameter-row {
//   display: flex;
//   justify-content: space-between;
// }

// .parameter-label {
//   text-align: left;
//   font-weight: 400;
//   font-size: 12px;
// }

// .parameter-value {
//   text-align: right;
//   font-weight: 600;
//   font-size: 12px;
// }

// .parameter-label.top {
//   border-bottom: 1px solid #fff;
// }

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Dhaka</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">30&deg;C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">30&deg;C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value">50%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">1000 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
