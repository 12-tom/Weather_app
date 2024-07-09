import React, { useEffect, useState } from "react";
import { Err, Message, Population, Weather } from "../types/types";
import { AxiosError } from "axios";

type Props = {
  setCity: (val: string) => void;
  get: Weather | null | undefined;
  getError: AxiosError<Err> | undefined;
  post: Population | undefined;
  postError: AxiosError<Message> | undefined;
  getStatus: number | undefined;
  postStatus: number | undefined;
};

const WeatherHeader: React.FC<Props> = ({
  setCity,
  get,
  getError,
  post,
  postError,
  getStatus,
  postStatus
}) => {
  const [day, setDay] = useState<string>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [cityName, setCityName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [population, setPopulation] = useState<string>();
  const [cityData, setCityData] = useState<string>();

  let currentDate: Date = new Date(get?.location.localtime);
  console.log(currentDate)

  const handleDate = (locale: string) => {
    setDay(currentDate?.toLocaleString(locale, { weekday: "long" }));
    setDate(
      currentDate?.getDate() +
        " " +
        currentDate?.toLocaleString(locale, { month: "long" }) +
        " " +
        currentDate?.getFullYear()
    );
    setTime(
      currentDate?.toLocaleTimeString(locale, {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  };

  const handleChange = (event: any) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setCity(cityName);
    setCityName("");
    setIsLoading(true);
  };

  useEffect(() => {
    {postStatus !== 400
      ? setPopulation(`Population: ${post?.data?.populationCounts?.[0]?.value} | Year:
          ${post?.data?.populationCounts?.[0]?.year}`)
      : setPopulation(`! ${postError?.response?.data?.msg}`);
    }
    {getStatus !== 400
      ? setCityData(get?.location?.name)
      : (setCityData(getError?.response?.data?.error?.message), currentDate = new Date())
    }
    handleDate("locale");
    setIsLoading(false);
  }, [ get, getError]);

  return (
    <div className="py-8 px-12 flex flex-col">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          {isLoading ? (
            <img
              src="src/assets/globe.svg"
              alt="globe-img"
              className="animate-spin"
            />
          ) : (
            <img src="src/assets/globe.svg" alt="globe-img" />
          )}

          <h2 className="text-back text-[32px] font-[MonstBold] font-semibold">
            {cityData}
          </h2>
        </div>
        <form className="p-2 bg-back rounded-lg border" onSubmit={handleSubmit}>
          <input
            placeholder="Enter city name"
            type="text"
            name="city"
            value={cityName}
            className="text-white bg-transparent outline-none"
            onChange={handleChange}
          />
          <button
            className="bg-primary py-1 px-2 rounded"
            type="submit"
            disabled={cityName === ""}
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-back text-lg font-[MonstBold] font-semibold">
          {day}, {date} | {time}
        </h4>
        <h4 className="text-back text-lg font-[MonstBold] font-semibold">
          {population}
        </h4>
      </div>
    </div>
  );
};

export default WeatherHeader;
