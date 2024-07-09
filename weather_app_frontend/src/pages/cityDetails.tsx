import WeatherHeader from "../components/weatherHeader";
import WeatherBody from "../components/weatherBody";
import React, { useState } from "react";
import { useFetchData, useSendData } from "../api/api";
import Error from "../components/error";

const CityDetails: React.FC = () => {
  const [city, setCity] = useState<string>("Toronto");

  const handleCity = (val: string) => {
    setCity(val);
  };

  const { post, postError, postStatus } = useSendData(city);
  const { get, getError, getStatus } = useFetchData(post, postError);

  return (
    <div className="bg-secondary h-screen py-16">
      <div className="m-auto max-w-[1140px]">
        <div className="bg-primary rounded-xl shadow-xl">
          <WeatherHeader
            setCity={handleCity}
            get={get}
            getError={getError}
            getStatus={getStatus}
            post={post}
            postError={postError}
            postStatus={postStatus}
          />
          {getStatus !== 400?
          <WeatherBody data={get} />
            : <Error />}
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
