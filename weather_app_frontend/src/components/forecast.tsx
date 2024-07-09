import React from "react";
import { Weather } from "../types/types";

type Props = {
  data: Weather | null | undefined;
};

const Forecast: React.FC<Props> = ({ data }) => {

  const handleDate = (locale: string, date: string) => {
    const currentDate = new Date(date)
    return currentDate.toLocaleString(locale, { weekday: "long" });
  }
  
  return (
    <div className="bg-gradient-to-b from-primary to-secondary py-8 px-16 rounded-xl flex items-center gap-8">
      <ul className="flex flex-col items-center justify-between p-4 bg-back rounded-xl">
        <li className="flex items-center gap-4 text-center text-primary font-[MonstBold]">
          <img src="src/assets/sun.svg" alt="" />
          <h2>
            Sunrise <br />
            <strong>{data?.forecast.forecastday[0].astro.sunrise}</strong>
          </h2>
          <h2>
            Sunset <br />
            <strong>{data?.forecast.forecastday[0].astro.sunset}</strong>
          </h2>
        </li>
        <li className="flex items-center gap-4 text-center text-primary font-[MonstBold]">
          <img src="src/assets/moon.svg" alt="" />
          <h2>
            Moonrise <br />
            <strong>{data?.forecast.forecastday[0].astro.moonrise}</strong>
          </h2>
          <h2>
            Moonset <br />
            <strong>{data?.forecast.forecastday[0].astro.moonset}</strong>
          </h2>
        </li>
      </ul>
      <ul className="flex items-center justify-between gap-4">
        {data?.forecast.forecastday.map((day, index) => {
          return (
            <li key={index} className="flex flex-col text-center text-back font-[MonstBold] w-[25%] h-[144px]">
              <h2>
                <strong>{handleDate('locale', day.date)}</strong>
              </h2>
              <img
                className="w-full h-[124px]"
                src={day.day.condition.icon}
                alt="day-condition-img"
              />
              <h2>{day.day.condition.text}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forecast;
