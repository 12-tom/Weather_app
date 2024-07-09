import React, { useEffect, useState } from 'react';
import Forecast from './forecast';
import { Weather } from '../types/types';

type Props = {
  data: Weather| null | undefined;
}

const WeatherBody: React.FC<Props> = ({ data }) => {

  const [temperature, setTemperature] = useState<number | undefined | null>();
  const [unit, setUnit] = useState<string | null>();

  useEffect(() => {
    setTemperature(data?.current.temp_c)
    setUnit('°C');
  },[data])

  const handleClick = () => {
    if (unit === '°C') {
      setTemperature(data?.current.temp_f);
      setUnit('°F');
    } else {
      setTemperature(data?.current.temp_c);
      setUnit('°C');
    }
  }

  return (
    <>
      <div className="py-8 px-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3
            className="text-[96px] font-[MonstBold] font-medium cursor-pointer"
            onClick={handleClick}
          >
            {temperature}
          </h3>
          <ul className="text-[32px] font-[MonstBold] font-medium">
            <li>
              <a href="#">{unit}</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[144px] h-[144px] text-center">
            <img
              src={data?.current.condition.icon}
              alt="weather-img"
              className="w-full h-[114px]"
            />
            <h2 className="text-xl text-back font-[MonstBold] font-semibold">
              {data?.current.condition.text}
            </h2>
          </div>
          <div>
            <ul>
              <li className="flex items-center gap-2 text-xl font-[MonstBold]">
                <img src="src/assets/feels-like.svg" alt="feel-like-img" />
                Feels like:
                <span>{data?.current.feelslike_c}°C</span>
              </li>
              <li className="flex items-center gap-2 text-xl font-[MonstBold]">
                <img src="src/assets/humidity.svg" alt="humidity-img" />
                Humidity:
                <span>{data?.current.humidity}%</span>
              </li>
              <li className="flex items-center gap-2 text-xl font-[MonstBold]">
                <img src="src/assets/wind.svg" alt="wind-img" />
                Wind:
                <span>{data?.current.wind_kph}km/h</span>
              </li>
              <li className="flex items-center gap-2 text-xl font-[MonstBold]">
                <img
                  src="src/assets/percipitation.svg"
                  alt="percipitation-img"
                />
                Percipitation:
                <span>{data?.current.precip_mm}mm</span>
              </li>
              <li className="flex items-center gap-2 text-xl font-[MonstBold]">
                <img src="src/assets/pressure.svg" alt="pressure-img" />
                Pressure:
                <span>{data?.current.pressure_in}in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Forecast data={data} />
    </>
  );
};

export default WeatherBody;
